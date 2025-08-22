import { type Database } from 'src/db';

export async function getaActiveSessions(db: Database) {
  return await db.query.scoringSessions.findMany({
    where: (sessions, { ne }) => ne(sessions.state, 'CLOSED'),
    with: {
      course: true,
      scorecards: {
        orderBy: (scorecards, { asc }) => [asc(scorecards.toPar)],
        with: {
          players: { with: { player: true } }
        }
      }
    }
  });
}

export type ActiveSession = Awaited<ReturnType<typeof getaActiveSessions>>[number];
