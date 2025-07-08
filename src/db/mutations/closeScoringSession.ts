import {
  getLeaderboardForScoringSession,
  getMinimalScoringSession
} from '../queries/getScoringSession';
import { setEventPoints } from 'src/lib/setEventPoints.ts';
import { type Database } from 'src/db';
import { eq } from 'drizzle-orm';
import { events, eventSessions, scorecards, scoringSessions } from '../schema';

export async function closeScoringSession(scoringSessionId: number, db: Database) {
  const scoringSession = await getMinimalScoringSession(scoringSessionId, db);
  if (!scoringSession) {
    throw new Error('Hittade ingen scoring session');
  }

  const leaderboards = await getLeaderboardForScoringSession(scoringSession, db);
  if (leaderboards.length === 0) {
    throw new Error('Hittade ingen data att visa');
  }

  const leaderBoardFlattened = leaderboards.flatMap((session) => session.scorecards);

  const withEventPoints = setEventPoints(
    !!scoringSession.special,
    scoringSession.scoringType === 'strokes',
    leaderBoardFlattened
  );

  const promises = [];

  const insertedEvents = await db
    .insert(events)
    .values({
      courseId: scoringSession.courseId,
      special: scoringSession.special,
      eventType: scoringSession.eventType,
      scoringType: scoringSession.scoringType,
      seasonId: 1
    })
    .returning({ id: events.id });

  if (!insertedEvents || insertedEvents.length !== 1) {
    throw Error('no Event data');
  }

  const event = insertedEvents[0];

  for (const scorecard of withEventPoints) {
    // deno-lint-ignore no-unused-vars
    const { id, players, rank, ...rest } = scorecard;
    promises.push(
      db
        .update(scorecards)
        .set({ weekPoints: scorecard.weekPoints })
        .where(eq(scorecards.id, scorecard.id))
    );
  }

  const sessionIds = [...new Set(leaderboards.map((s) => s.id))];
  for (const sessionId of sessionIds) {
    promises.push(
      db.update(scoringSessions).set({ state: 'CLOSED' }).where(eq(scoringSessions.id, sessionId))
    );
    promises.push(
      db.insert(eventSessions).values({
        eventId: event.id,
        sessionId: sessionId
      })
    );
  }

  await Promise.all(promises);
}
