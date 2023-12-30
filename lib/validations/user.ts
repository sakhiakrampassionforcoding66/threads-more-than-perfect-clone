import * as z from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z.string().max(30, {
    message: "name must be at most 30 characters"
  }),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});