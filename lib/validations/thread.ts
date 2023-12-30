import * as z from 'zod';

export const ThreadValidation = z.object({
  thread: z.string().min(3, {
    message: 'MInimum of 3 three characters'
  }),
  accountId: z.string()
});

export const CommentValidation = z.object({
  thread: z.string().min(3, {
    message: 'MInimum of 3 three characters'
  })
});