import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { updateCurrentHole } from 'src/db/mutations/updateCurrentHole';

export const server = {
  setCurrentHole: defineAction({
    input: z.object({
      scoringSessionId: z.number(),
      currentHole: z.number()
    }),
    handler: async (input) => {
      await updateCurrentHole(input.scoringSessionId, input.currentHole);
    }
  })
};
