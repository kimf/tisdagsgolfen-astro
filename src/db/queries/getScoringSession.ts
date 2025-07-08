import { type Database } from 'src/db';

export async function getScoringSession(scoringSessionId: number, db: Database) {
  return await db.query.scoringSessions.findFirst({
    where: (scoringSessions, { eq }) => eq(scoringSessions.id, scoringSessionId),
    with: {
      course: {
        with: {
          holes: {
            orderBy: (holes, { asc }) => [asc(holes.number)]
          }
        }
      },
      scorecards: {
        orderBy: (scorecards, { asc }) => [asc(scorecards.id)],
        with: {
          scores: {
            orderBy: (scores, { asc }) => [asc(scores.hole)]
          },
          players: { with: { player: true } }
        }
      }
    }
  });
}
export type ScoringSessionWithAllData = NonNullable<Awaited<ReturnType<typeof getScoringSession>>>;

export async function getLeaderboardForScoringSession(
  scoringSession: MinimalScoringSession,
  db: Database,
  includeScores?: boolean
) {
  return await db.query.scoringSessions.findMany({
    where: (ss, { and, eq, ne }) =>
      and(
        eq(ss.courseId, scoringSession.courseId),
        eq(ss.special, !!scoringSession.special),
        eq(ss.eventType, scoringSession.eventType ?? 'individual'),
        eq(ss.scoringType, scoringSession.scoringType ?? 'stableford'),
        eq(ss.partOfFinal, !!scoringSession.partOfFinal),
        ne(ss.state, 'CLOSED')
      ),
    with: {
      scorecards: {
        orderBy: (scorecards, { asc }) => [asc(scorecards.id)],
        with: {
          ...(includeScores
            ? {
                scores: {
                  orderBy: (scores, { asc }) => [asc(scores.hole)]
                }
              }
            : {}),
          players: { with: { player: true } }
        }
      }
    }
  });
}
export type LeaderboardScorecard = NonNullable<
  Awaited<ReturnType<typeof getLeaderboardForScoringSession>>[number]['scorecards'][number]
>;

export async function getMinimalScoringSession(id: number, db: Database) {
  return await db.query.scoringSessions.findFirst({
    where: (scoringSessions, { eq }) => eq(scoringSessions.id, id),
    with: {
      course: true
    }
  });
}

export type MinimalScoringSession = NonNullable<
  Awaited<ReturnType<typeof getMinimalScoringSession>>
>;
