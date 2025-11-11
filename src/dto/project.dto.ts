import z from "zod";

export const projectCreateDto = z.object({
  title: z.string(),
  description: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  technologies_used: z.string().optional().nullable(),
  cover_image: z.string().optional().nullable(),
  github_link: z.string().optional().nullable(),
});

export const projectUpdateDto = projectCreateDto.partial();