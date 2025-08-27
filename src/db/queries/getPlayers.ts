import type { Database } from 'src/db';

export async function getPlayers(db: Database) {
  return await db.query.profiles.findMany();
}
export type Player = NonNullable<Awaited<ReturnType<typeof getPlayers>>>[number];

export async function getPlayerWithScores(id: number, db: Database) {
  return await db.query.profiles.findFirst({
    where: (profiles, { eq }) => eq(profiles.id, id),
    with: {
      scorecards: {
        with: {
          scorecard: {
            with: {
              scores: true,
              scoringSession: true
            }
          }
        }
      }
    }
  });
}

export type PlayerWithScores = NonNullable<Awaited<ReturnType<typeof getPlayerWithScores>>>;
