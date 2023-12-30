import * as z from 'zod';

export const CommunityValidation = z.object({
  query: z.string()
});