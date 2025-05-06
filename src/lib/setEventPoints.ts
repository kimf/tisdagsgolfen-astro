import type { Scorecard } from 'src/db/schema/scorecard';
import type { RankedScorecard } from './standardCompRank';
import standardCompRank from './standardCompRank';
import type { LeaderboardScorecard } from 'src/db/queries/getScoringSession';

const SPECIAL_POINTS = [15, 11, 9, 7, 5, 3, 1];
const IND_POINTS = [20, 15, 12, 10, 8, 6, 4, 2];

export function setEventPoints(
  special: boolean,
  strokes: boolean,
  scorecards: LeaderboardScorecard[]
): RankedScorecard[] {
  const rankedScorecards = strokes
    ? standardCompRank(scorecards, 'toPar', false, null)
    : standardCompRank(
        scorecards.map((s) => ({ ...s, toPar: (s.through ?? 0) * 2 - (s.points ?? 0) })),
        'toPar',
        true,
        null
      );

  const pointsArray: number[] = special ? SPECIAL_POINTS : IND_POINTS;
  if (pointsArray.length < rankedScorecards.length) {
    [...Array(rankedScorecards.length - pointsArray.length)].map(() => pointsArray.push(0));
  }

  pointsArray.forEach((pointsSum, rank) => {
    let item: Scorecard;
    rank++;
    const samePosition = rankedScorecards.filter((s) => s.rank === rank);
    const size = samePosition.length;

    if (size === 1) {
      item = samePosition[0];
      return (item.weekPoints = pointsSum);
    } else if (size > 1) {
      return setDividedPoints(samePosition, size, pointsArray);
    }
  });

  return rankedScorecards;
}

// TODO: rankedScores reject if guest??

function setDividedPoints(items: RankedScorecard[], size: number, pointsArray: number[]) {
  items.forEach((item) => {
    const from = item.rank - 1;
    const to = from + (size - 1);
    const pointsToDivide = pointsArray.slice(from, to + 1);
    const roundedPoints = getRoundedPoints(pointsToDivide, size);
    item.weekPoints = roundedPoints;
  });
}

function getRoundedPoints(pointsToDivide: number[], size: number) {
  const sum = pointsToDivide.reduce((a, b) => a + b, 0);
  const average = sum / size;
  const rounded = Math.round(average * 2) / 2;
  return rounded;
}
