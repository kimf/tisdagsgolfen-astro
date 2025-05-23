import { eq } from 'drizzle-orm';
import { type Database } from 'src/db';
import { scoringSessions } from 'src/db/schema';

export async function updateCurrentHole(
  scoringSessionId: number,
  holeNumber: number,
  db: Database
) {
  return db
    .update(scoringSessions)
    .set({ currentHole: holeNumber })
    .where(eq(scoringSessions.id, scoringSessionId));
}
