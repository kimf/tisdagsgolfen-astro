import courses, { coursesRelations } from './course';
import seasons from './season';
import scoringSessions, { scoringSessionRelations } from './scoring_sessions';
import profiles, { profilesRelations } from './profile';
import holes, { holesRelations } from './hole';
import scorecards, { scorecardsRelations } from './scorecard';
import scorecardPlayers, { scorecardPlayersRelations } from './scorecard_player';
import scores, { scoresRelations } from './score';
import events, { eventsRelations } from './event';
import eventSessions, { eventSesssionsRelations } from './event_session';

export {
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
};
