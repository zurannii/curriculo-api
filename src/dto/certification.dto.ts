import z from "zod";

export const certificationCreateDto = z.object({
  name: z.string(),
  institution: z.string().optional().nullable(),
  completion_date: z.coerce.date().optional().nullable(),
  certificate_link: z.string().optional().nullable(),
});

export const certificationUpdateDto = certificationCreateDto.partial();