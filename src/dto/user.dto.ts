import z from "zod"

export const userCreateDto = z.object({
    name: z.string(),
    current_position: z.string().optional(),
    professional_summary: z.string().optional(),
    profile_picture: z.string().optional(),
    location: z.string().optional(),
    email: z.string().email(),
    phone: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
});

