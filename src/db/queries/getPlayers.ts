import db from 'src/db';

export async function getPlayers() {
  return await db.query.profiles.findMany();
}

export type Player = NonNullable<Awaited<ReturnType<typeof getPlayers>>>[number];
