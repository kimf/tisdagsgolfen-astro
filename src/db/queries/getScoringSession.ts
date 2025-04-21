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
