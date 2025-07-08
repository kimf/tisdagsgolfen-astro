import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import courses from './course';
import scoringSessions from './scoring_sessions';
import scorecardPlayers from './scorecard_player';
import scores from './score';

const scorecards = sqliteTable('scorecards', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  scoringSessionId: integer('scoring_session_id', { mode: 'number' })
    .references(() => scoringSessions.id, { onDelete: 'cascade' })
    .notNull(),
  teamScorecardId: integer('team_scorecard_id', { mode: 'number' }),
  courseId: integer('course_id', { mode: 'number' })
    .references(() => courses.id)
    .notNull(),
  points: integer('points', { mode: 'number' }).default(0),
  strokes: integer('strokes', { mode: 'number' }).default(0),
  putts: integer('putts', { mode: 'number' }).default(0),
  weekPoints: integer('week_points', { mode: 'number' }).default(0),
  givenStrokes: integer('given_strokes', { mode: 'number' }).default(0),
  teamIndex: integer('team_index', { mode: 'number' }).default(0),
  through: integer('through', { mode: 'number' }).default(0),
  toPar: integer('to_par', { mode: 'number' }).default(0),
  currentHole: integer('current_hole', { mode: 'number' }).default(1),
  partOfFinal: integer('part_of_final', { mode: 'boolean' }).default(false),
  individualForTeamWIndividual: integer('individual_for_team_w_individual', {
    mode: 'boolean'
  }).default(false),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
});

export const scorecardsRelations = relations(scorecards, ({ one, many }) => ({
  players: many(scorecardPlayers),
  scores: many(scores),
  course: one(courses, {
    fields: [scorecards.courseId],
    references: [courses.id]
  }),
  scoringSession: one(scoringSessions, {
    fields: [scorecards.scoringSessionId],
    references: [scoringSessions.id]
  })
}));

export type Scorecard = InferSelectModel<typeof scorecards>;

export default scorecards;
