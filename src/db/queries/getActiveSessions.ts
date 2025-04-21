import db from 'src/db';

export async function getaActiveSessions() {
  return await db.query.scoringSessions.findMany({
    where: (sessions, { ne, and }) =>
      and(ne(sessions.state, 'CLOSED'), ne(sessions.state, 'FINALPENDING')),
    with: {
      course: true
    }
  });
}

export type ActiveSession = Awaited<ReturnType<typeof getaActiveSessions>>[number];
