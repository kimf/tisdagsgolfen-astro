import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable, unique } from 'drizzle-orm/sqlite-core';

import courses from './course';

const holes = sqliteTable(
  'holes',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    hcp: integer('hcp', { mode: 'number' }).notNull(),
    courseId: integer('course_id', { mode: 'number' })
      .references(() => courses.id, { onDelete: 'cascade' })
      .notNull(),
    number: integer('number', { mode: 'number' }).notNull(),
    par: integer('par', { mode: 'number' }).notNull(),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
  },
  (t) => [
    unique('hole_course_number').on(t.courseId, t.number),
    unique('hole_course_hcp').on(t.courseId, t.hcp)
  ]
);

export const holesRelations = relations(holes, ({ one }) => ({
  course: one(courses, {
    fields: [holes.courseId],
    references: [courses.id]
  })
}));

export type Hole = InferSelectModel<typeof holes>;

export default holes;
