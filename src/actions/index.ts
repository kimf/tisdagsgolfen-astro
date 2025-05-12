import { defineAction } from 'astro:actions';

import { z } from 'astro:schema';
import getDb from 'src/db';
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
  })
};
