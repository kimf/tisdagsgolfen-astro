import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import courses from './course';
import seasons from './season';
import eventSessions from './event_session';
import type { EventType, ScoringType } from './scoring_sessions';

const events = sqliteTable('events', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  seasonId: integer('season_id', { mode: 'number' })
    .references(() => seasons.id)
    .notNull(),
  courseId: integer('course_id', { mode: 'number' })
    .references(() => courses.id)
    .notNull(),
  special: integer('special', { mode: 'boolean' }).default(false),
  eventType: text('event_type').$type<EventType>().default('individual').notNull(),
  scoringType: text('scoring_type').$type<ScoringType>().default('stableford').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
});

export const eventsRelations = relations(events, ({ one, many }) => ({
  course: one(courses, {
    fields: [events.courseId],
    references: [courses.id]
  }),
  season: one(seasons, {
    fields: [events.seasonId],
    references: [seasons.id]
  }),
  eventSessions: many(eventSessions)
}));

export type SeasonEvent = InferSelectModel<typeof events>;

export default events;

// create trigger "Rebuild Website on new Events"
// after insert
// or delete
// or
// update on events for each row
// execute function supabase_functions.http_request (
//   'https://api.vercel.com/v1/integrations/deploy/prj_hOvFuqL3aSRlue7RGyNYIqSaWIgp/CKnAqNMQSn',
//   'POST',
//   '{"Content-type":"application/json"}',
//   '{}',
//   '1000'
// );
