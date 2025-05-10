// import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/d1';

import {
  courses,
  coursesRelations,
  holes,
  holesRelations,
  profiles,
  profilesRelations,
  scores,
  scoresRelations,
  scorecardPlayers,
  scorecardPlayersRelations,
  scorecards,
  scorecardsRelations,
  scoringSessions,
  scoringSessionRelations,
  seasons,
  events,
  eventsRelations,
  eventSessions,
  eventSesssionsRelations
} from './schema';

// const url = import.meta.env.DATABASE_URL;
// if (!url) {
//   console.error('DB is not set');
//   throw new Error('DB is not set');
// }

// let authToken = '';
// if (import.meta.env.PROD) {
//   authToken = import.meta.env.TURSO_AUTH_TOKEN;

//   if (!authToken || authToken === '') {
//     console.error('TURSO_AUTH_TOKEN is not set');
//     throw new Error('TURSO_AUTH_TOKEN is not set');
//   }
// }

// const turso = createClient({ url, authToken });

const getDb = (locals: App.Locals) => {
  return drizzle(locals.runtime.env.DB, {
    schema: {
      courses,
      coursesRelations,
      holes,
      holesRelations,
      profiles,
      profilesRelations,
      scores,
      scoresRelations,
      scorecardPlayers,
      scorecardPlayersRelations,
      scorecards,
      scorecardsRelations,
      scoringSessions,
      scoringSessionRelations,
      seasons,
      events,
      eventsRelations,
      eventSessions,
      eventSesssionsRelations
    }
  });
};

export type Database = ReturnType<typeof getDb>;
export default getDb;
