import type { Database } from 'src/db';

export async function getPlayers(db: Database) {
  return await db.query.profiles.findMany();
}

export type Player = NonNullable<Awaited<ReturnType<typeof getPlayers>>>[number];
