import { z } from "zod/v4";

// Актёр
export const castMemberSchema = z.object({
    id: z.number(),
    name: z.string(),
    character: z.string(),
    profile_path: z.string().nullable(),
});


export type CastMember = z.infer<typeof castMemberSchema>;

export const castResponseSchema = z.array(castMemberSchema);