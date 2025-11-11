import z from "zod";

export const experienceCreateDto = z.object({
  role: z.string(),
  company: z.string().optional().nullable(),
  start_date: z.coerce.date().optional().nullable(),
  end_date: z.coerce.date().optional().nullable(),
});

export const experienceUpdateDto = experienceCreateDto.partial();