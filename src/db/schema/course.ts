import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, unique, sqliteTable } from 'drizzle-orm/sqlite-core';
import scoringSessions from './scoring_sessions';
import holes from './hole';
import scorecards from './scorecard';
import events from './event';

const courses = sqliteTable(
  'courses',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    club: text('club').notNull(),
    name: text('name').notNull(),
    par: integer('par', { mode: 'number' }).notNull(),
    holesCount: integer('holes_count', { mode: 'number' }).notNull().default(0),
    eventsCount: integer('events_count', { mode: 'number' }).notNull().default(0),
    finalCourse: integer('final_course', { mode: 'boolean' }).default(false),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
  },
  (t) => [unique('course_club_name').on(t.club, t.name)]
);

export const coursesRelations = relations(courses, ({ many }) => ({
  scoringSessions: many(scoringSessions),
  scorecards: many(scorecards),
  holes: many(holes),
  events: many(events)
}));

export type Course = InferSelectModel<typeof courses>;

export default courses;
