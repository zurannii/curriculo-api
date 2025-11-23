import z from "zod";

export const languageCreateDto = z.object({
  language: z.string(),
  proficiency: z.string().optional().nullable(),
});

export const languageUpdateDto = languageCreateDto.partial();