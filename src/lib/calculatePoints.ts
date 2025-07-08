import type { ScoringType } from 'src/db/schema/scoring_sessions';
import { cacheable } from './cacheable';
import type { Score } from 'src/db/schema/score';

interface KeyedArray {
  [key: number]: number;
}
const pointsArray: KeyedArray = [];
pointsArray[-8] = 10;
pointsArray[-7] = 9;
pointsArray[-6] = 8;
pointsArray[-5] = 7;
pointsArray[-4] = 6;
pointsArray[-3] = 5;
pointsArray[-2] = 4;
pointsArray[-1] = 3;
pointsArray[0] = 2;
pointsArray[1] = 1;
pointsArray[2] = 0;
pointsArray[3] = 0;
pointsArray[4] = 0;
pointsArray[5] = 0;
pointsArray[6] = 0;
pointsArray[7] = 0;
pointsArray[8] = 0;
pointsArray[9] = 0;
pointsArray[10] = 0;

/*
- **Dubbelbogey eller sämre**: -3 poäng
- **Bogey**: -1 poäng
- **Par**: 0 poäng
- **Birdie**: +2 poäng
- **Eagle**: +5 poäng
- **Albatross**: +8 poäng
*/
const modifiedPointsArray: KeyedArray = [];
modifiedPointsArray[-8] = 8;
modifiedPointsArray[-7] = 8;
modifiedPointsArray[-6] = 8;
modifiedPointsArray[-5] = 8;
modifiedPointsArray[-4] = 8;
modifiedPointsArray[-3] = 8;
modifiedPointsArray[-2] = 5;
modifiedPointsArray[-1] = 2;
modifiedPointsArray[0] = 0;
modifiedPointsArray[1] = -1;
modifiedPointsArray[2] = -3;
modifiedPointsArray[3] = -3;
modifiedPointsArray[4] = -3;
modifiedPointsArray[5] = -3;
modifiedPointsArray[6] = -3;
modifiedPointsArray[7] = -3;
modifiedPointsArray[8] = -3;
modifiedPointsArray[9] = -3;
modifiedPointsArray[10] = -3;

export const calculatePoints = cacheable(
  (strokes: number, extraStrokes: number, par: number, modifiedPoints = false) => {
    const strokeSum = strokes - extraStrokes;
    const testSum = strokeSum - par;
    return modifiedPoints ? modifiedPointsArray[testSum] : pointsArray[testSum];
  }
);

// TODO: Tänk hur Golf Gamebook gjorde här.
// To par = -1 om man fick 3p osv...
// teamStrokes = par - toPar t.ex
// skapa upp en variant av varje och ha dem öppna samtidigt som du leker med ledartavlor och scoring.
// Dela upp istället för att sprinkla med massa jobbiga if-satser!

export const calculateTeamPoints = (
  scores: Score[],
  scoringType: ScoringType,
  hole: number,
  par: number
) => {
  let teamPoints = 0;
  let teamToPar = 0;
  let teamStrokes = 0;

  if (scoringType === 'strokes') {
    // Lowest toPar
    const best = scores.reduce((a, b) => (a.toPar < b.toPar ? a : b));
    teamToPar = best.toPar;
    teamPoints = best.points;
    teamStrokes = best.strokes;
  } else if (scoringType === 'stableford' || scoringType === 'modified') {
    // Highest points
    const best = scores.reduce((a, b) => (a.points > b.points ? a : b));
    teamToPar = best.toPar;
    teamPoints = best.points;
    teamStrokes = best.strokes;
  } else if (scoringType === 'irish') {
    if (hole >= 1 && hole <= 9) {
      // Highest point
      const best = scores.reduce((a, b) => (a.points > b.points ? a : b));
      teamToPar = best.toPar;
      teamPoints = best.points;
      teamStrokes = best.strokes;
    } else if (hole >= 10 && hole <= 18) {
      // Add best 2 points
      const sorted = [...scores].sort((a, b) => b.points - a.points);
      const bestTwo = sorted.slice(0, 2);
      teamPoints = bestTwo.reduce((sum, s) => sum + s.points, 0);
      teamToPar = bestTwo.reduce((sum, s) => sum + s.toPar, 0);
      teamStrokes = bestTwo.reduce((sum, s) => sum + s.strokes, 0);
    }
  } else if (scoringType === 'bolle') {
    // Add highest and lowest point
    const sorted = [...scores].sort((a, b) => a.points - b.points);
    const lowest = sorted[0];
    const highest = sorted[sorted.length - 1];
    teamPoints = lowest.points + highest.points;
    teamToPar = 0; //lowest.toPar + highest.toPar;
    teamStrokes = 0; //lowest.strokes + highest.strokes;
  } else if (scoringType === 'snigel') {
    if (hole >= 1 && hole <= 8) {
      // Highest point
      const best = scores.reduce((a, b) => (a.points > b.points ? a : b));
      teamPoints = best.points;
      teamToPar = 0; //best.toPar;
      teamStrokes = 0; //best.strokes;
    } else if (hole >= 9 && hole <= 11) {
      // Add two highest points
      const sorted = [...scores].sort((a, b) => b.points - a.points);
      const bestTwo = sorted.slice(0, 2);
      teamPoints = bestTwo.reduce((sum, s) => sum + s.points, 0);
      teamToPar = 0; //bestTwo.reduce((sum, s) => sum + s.toPar, 0);
      teamStrokes = 0; //bestTwo.reduce((sum, s) => sum + s.strokes, 0);
    } else if (hole >= 12 && hole <= 14) {
      // Lowest point
      const worst = scores.reduce((a, b) => (a.points < b.points ? a : b));
      teamPoints = worst.points;
      teamToPar = 0; // worst.toPar;
      teamStrokes = 0; // worst.strokes;
    } else if (hole >= 15 && hole <= 17) {
      // Double the 2 highest points
      const sorted = [...scores].sort((a, b) => b.points - a.points);
      const bestTwo = sorted.slice(0, 2);
      teamPoints = 2 * bestTwo.reduce((sum, s) => sum + s.points, 0);
      teamToPar = 0; //bestTwo.reduce((sum, s) => sum + s.toPar, 0);
      teamStrokes = 0; //bestTwo.reduce((sum, s) => sum + s.strokes, 0);
    } else if (hole === 18) {
      // Triple the 2 highest points
      const sorted = [...scores].sort((a, b) => b.points - a.points);
      const bestTwo = sorted.slice(0, 2);
      teamPoints = 3 * bestTwo.reduce((sum, s) => sum + s.points, 0);
      teamToPar = 0; //3 * bestTwo.reduce((sum, s) => sum + s.toPar, 0);
      teamStrokes = 0; // 3 * bestTwo.reduce((sum, s) => sum + s.strokes, 0);
    }
  }

  return { teamToPar, teamPoints, teamStrokes };
};
