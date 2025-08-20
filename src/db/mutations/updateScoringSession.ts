import { eq } from 'drizzle-orm';
import { type Database } from 'src/db';
import { scorecards, scores } from 'src/db/schema';
import { calculateExtraStrokes } from 'src/lib/calculateExtraStrokes';
import { extractScorecards } from 'src/lib/formDataExtractors';
import { getScoringSession } from '../queries/getScoringSession';
import { calculatePoints } from 'src/lib/calculatePoints';
import { calculateEarnings } from 'src/lib/calculateEarnings';

export async function updateScoringSession(
  scoringSessionId: number,
  formData: FormData,
  db: Database
) {
  const cards = extractScorecards(formData);
  console.log('CARDS', cards);
  if (!cards || cards.length === 0) {
    console.error('No scorecards provided');
    throw new Error('No scorecards provided');
  }

  const scoringSession = await getScoringSession(scoringSessionId, db);
  if (!scoringSession) {
    console.error('No such scoring session');
    throw new Error('No such scoring session');
  }
  console.log('Scoring session:', scoringSession);

  cards?.forEach(async (scorecard) => {
    console.log('Updating scorecard:', scorecard.id);
    const response = await db
      .update(scorecards)
      .set({ givenStrokes: scorecard.strokes })
      .where(eq(scorecards.id, scorecard.id));

    console.log('RESPONSE', response);

    const scoreItems = await db.query.scores.findMany({
      where: (s, { eq }) => eq(s.scorecardId, scorecard.id)
    });

    console.log('Score items:', scoreItems);

    scoreItems.forEach(async (score) => {
      console.log('Updating score:', score.id);
      const hole = scoringSession.course.holes.find((h) => h.number === score.hole);

      if (!hole) {
        console.error('No such hole:', score.hole);
        throw new Error('No such hole');
      }
      const extraStrokes = calculateExtraStrokes(
        hole.hcp,
        scorecard.strokes || 0,
        scoringSession.course.holesCount
      );
      const points = calculatePoints(
        score.strokes,
        extraStrokes,
        hole.par,
        scoringSession.scoringType === 'modified'
      );
      const fines = scoringSession.special
        ? 0
        : calculateEarnings(score.putts, score.strokes, hole.par);
      const adjustedStrokes = score.strokes - extraStrokes;
      const toPar = adjustedStrokes - hole.par;

      const res = await db
        .update(scores)
        .set({ extraStrokes, points, toPar, fines })
        .where(eq(scores.id, score.id));
      console.log('Score updated:', res);
    });
  });
}
