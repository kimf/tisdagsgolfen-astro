import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import events from './event';
import scoringSessions from './scoring_sessions';

const eventSessions = sqliteTable('event_sessions', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  eventId: integer('event_id', { mode: 'number' })
    .references(() => events.id, { onDelete: 'cascade' })
    .notNull(),
  sessionId: integer('session_id', { mode: 'number' })
    .references(() => scoringSessions.id, { onDelete: 'cascade' })
    .notNull(),

  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
});

export const eventSesssionsRelations = relations(eventSessions, ({ one }) => ({
  event: one(events, {
    fields: [eventSessions.eventId],
    references: [events.id]
  }),
  session: one(scoringSessions, {
    fields: [eventSessions.sessionId],
    references: [scoringSessions.id]
  })
}));

export type EventSession = InferSelectModel<typeof eventSessions>;

export default eventSessions;
