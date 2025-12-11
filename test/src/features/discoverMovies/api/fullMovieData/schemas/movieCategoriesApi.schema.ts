import { z } from "zod/v4"
import {movieSchema} from "@/features/discoverMovies/api/fullMovieData/schemas/moviesApi.schema.ts";

export const categorySchema = z.object({
    page: z.number(),
    results: z.array(movieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

export type MovieCategory = z.infer<typeof categorySchema>;
