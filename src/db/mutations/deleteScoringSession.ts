import { eq } from 'drizzle-orm';
import db from 'src/db';
import { scoringSessions } from 'src/db/schema';

export async function deleteScoringSession(scoringSessionId: number) {
  return db.delete(scoringSessions).where(eq(scoringSessions.id, scoringSessionId));
}
