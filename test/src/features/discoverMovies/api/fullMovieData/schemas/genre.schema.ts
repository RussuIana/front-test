import {z} from "zod/v4";

export const genreSchema = z.object({
    id: z.number(),
    name: z.string(),
})
export type Genre = z.infer<typeof genreSchema>;