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
