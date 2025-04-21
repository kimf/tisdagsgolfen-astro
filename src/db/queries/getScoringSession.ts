import db from 'src/db';

export async function getScoringSession(scoringSessionId: number) {
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

export async function getLeaderboardForScoringSession(scoringSession: MinimalScoringSession) {
  return await db.query.scoringSessions.findMany({
    where: (ss, { and, eq, ne }) =>
      and(
        eq(ss.courseId, scoringSession.courseId),
        eq(ss.special, !!scoringSession.special),
        eq(ss.teamEvent, !!scoringSession.teamEvent),
        eq(ss.strokes, !!scoringSession.strokes),
        eq(ss.partOfFinal, !!scoringSession.partOfFinal),
        ne(ss.state, 'CLOSED')
      ),
    with: {
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
export type LeaderboardScorecard = NonNullable<
  Awaited<ReturnType<typeof getLeaderboardForScoringSession>>[number]['scorecards'][number]
>;

export async function getMinimalScoringSession(id: number) {
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
