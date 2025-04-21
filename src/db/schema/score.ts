import { relations, sql, type InferSelectModel } from 'drizzle-orm';
import { text, integer, sqliteTable, unique } from 'drizzle-orm/sqlite-core';
import scorecards from './scorecard';

const scores = sqliteTable(
  'scores',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    scorecardId: integer('scorecard_id', { mode: 'number' })
      .references(() => scorecards.id, { onDelete: 'cascade' })
      .notNull(),
    strokes: integer('strokes', { mode: 'number' }).notNull().default(0),
    hole: integer('hole', { mode: 'number' }).notNull(),
    putts: integer('putts', { mode: 'number' }).notNull().default(0),
    beers: integer('beers', { mode: 'number' }).notNull().default(0),
    extraStrokes: integer('extra_strokes', { mode: 'number' }).notNull().default(0),
    points: integer('points', { mode: 'number' }).notNull().default(0),
    toPar: integer('to_par', { mode: 'number' }).notNull().default(0),
    fines: integer('fines', { mode: 'number' }).notNull().default(0),
    ciders: integer('ciders', { mode: 'number' }).notNull().default(0),
    createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`)
  },
  (t) => [unique('scores_scorecard_id_hole').on(t.scorecardId, t.hole)]
);

export const scoresRelations = relations(scores, ({ one, many }) => ({
  scorecard: one(scorecards, {
    fields: [scores.scorecardId],
    references: [scorecards.id]
  })
}));

export type Score = InferSelectModel<typeof scores>;

export default scores;
