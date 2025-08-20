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
  if (!cards || cards.length === 0) {
    throw new Error('No scorecards provided');
  }

  const scoringSession = await getScoringSession(scoringSessionId, db);
  if (!scoringSession) {
    throw new Error('No such scoring session');
  }

  for (const scorecard of cards) {
    await db
      .update(scorecards)
      .set({ givenStrokes: scorecard.strokes })
      .where(eq(scorecards.id, scorecard.id));

    const scoreItems = await db.query.scores.findMany({
      where: (s, { eq }) => eq(s.scorecardId, scorecard.id)
    });

    for (const score of scoreItems) {
      const hole = scoringSession.course.holes.find((h) => h.number === score.hole);

      if (!hole) {
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

      await db
        .update(scores)
        .set({ extraStrokes, points, toPar, fines })
        .where(eq(scores.id, score.id));
    }
  }
}
