import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import courses from './course';
import scorecards from './scorecard';
import profiles from './profile';

export type EventType = 'individual' | 'team' | 'team_w_individual';
export type ScoringType = 'stableford' | 'strokes' | 'modified' | 'irish' | 'bolle' | 'snigel';
export type ScoringSessionState = 'STARTED' | 'PENDING' | 'FINALPENDING' | 'CLOSED';

const scoringSessions = sqliteTable('scoring_sessions', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  ownerId: integer('owner_id', { mode: 'number' }).notNull(),
  courseId: integer('course_id', { mode: 'number' })
    .references(() => courses.id)
    .notNull(),
  special: integer('special', { mode: 'boolean' }).default(false),
  eventType: text('event_type').$type<EventType>().default('individual').notNull(),
  scoringType: text('scoring_type').$type<ScoringType>().default('stableford').notNull(),
  state: text('state').$type<ScoringSessionState>().default('STARTED'),
  currentHole: integer('current_hole', { mode: 'number' }).default(1),
  partOfFinal: integer('part_of_final', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
});

export const scoringSessionRelations = relations(scoringSessions, ({ one, many }) => ({
  scorecards: many(scorecards),
  course: one(courses, {
    fields: [scoringSessions.courseId],
    references: [courses.id]
  }),
  owner: one(profiles, {
    fields: [scoringSessions.ownerId],
    references: [profiles.id]
  })
}));

export type ScoringSession = InferSelectModel<typeof scoringSessions>;

export default scoringSessions;
