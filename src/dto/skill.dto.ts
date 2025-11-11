import z from "zod";

export const skillCreateDto = z.object({
  name: z.string(),
  type: z.string().optional().nullable(),
});

export const skillUpdateDto = skillCreateDto.partial();