import { eq } from 'drizzle-orm';
import { type Database } from 'src/db';
import { scoringSessions } from 'src/db/schema';

export async function deleteScoringSession(scoringSessionId: number, db: Database) {
  return db.delete(scoringSessions).where(eq(scoringSessions.id, scoringSessionId));
}
