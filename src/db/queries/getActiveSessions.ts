import db from 'src/db';

export async function getaActiveSessions() {
  const activeSessions = await db.query.scoringSessions.findMany({
    where: (sessions, { ne }) => ne(sessions.state, 'CLOSED') && ne(sessions.state, 'FINALPENDING'),
    with: {
      course: true
    }
  });

  return activeSessions;
}

export type ActiveSession = Awaited<ReturnType<typeof getaActiveSessions>>[number];
