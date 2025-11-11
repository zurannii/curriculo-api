import z from "zod";

export const userCreateDto = z.object({
  name: z.string(),
  current_position: z.string().optional().nullable(),
  professional_summary: z.string().optional().nullable(),
  profile_picture: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  linkedin: z.string().optional().nullable(),
  github: z.string().optional().nullable(),
});

export const userUpdateDto = userCreateDto.partial();