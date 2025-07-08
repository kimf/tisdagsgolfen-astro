import { defineAction } from 'astro:actions';

import { z } from 'astro:schema';
import { CreateScoringSessionInput } from 'src/components/newscoringsession/NewScoringSession';
import getDb from 'src/db';
import { createScoringSession } from 'src/db/mutations/createScoringSession';
import { updateCurrentHole } from 'src/db/mutations/updateCurrentHole';

export const server = {
  setCurrentHole: defineAction({
    input: z.object({
      scoringSessionId: z.number(),
      currentHole: z.number()
    }),
    handler: async (input, context) => {
      const db = getDb(context.locals);
      await updateCurrentHole(input.scoringSessionId, input.currentHole, db);
    }
  }),

  createScoringSession: defineAction({
    input: CreateScoringSessionInput,
    handler: async (input, context) => {
      const db = getDb(context.locals);
      const userId = context.cookies.get('userId')?.value;
      if (!userId) {
        throw new Error('User ID is required to create a scoring session.');
      }
      const id = await createScoringSession(Number(userId), input, db);
      if (!id) {
        throw new Error('No id returned, did it save correctly');
      }
      return id;
    }
  })
};
