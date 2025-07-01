import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import events from './event';

export type SeasonState = 'REGULAR' | 'FINAL' | 'CLOSED';

const seasons = sqliteTable('seasons', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').unique().notNull(),
  state: text('state').$type<SeasonState>().default('REGULAR'),
  winnersArray: text('winners_array'),
  closedAt: text('closed_at'),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
});

export const seasonsRelations = relations(seasons, ({ many }) => ({
  events: many(events)
}));

export type Season = InferSelectModel<typeof seasons>;

export default seasons;
