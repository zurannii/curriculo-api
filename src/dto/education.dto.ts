import z from "zod";

export const educationCreateDto = z.object({
  degree: z.string(),
  institution: z.string().optional().nullable(),
  start_date: z.coerce.date().optional().nullable(),
  end_date: z.coerce.date().optional().nullable(),
});

export const educationUpdateDto = educationCreateDto.partial();