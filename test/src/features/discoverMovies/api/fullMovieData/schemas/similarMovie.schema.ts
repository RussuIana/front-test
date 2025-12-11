import {z} from "zod/v4";

export const similarMovieSchema = z.object({
    id: z.number(),
    title: z.string(),
    poster_path: z.string().nullable(),
    release_date: z.string().nullable(),
});

export const similarMoviesResponseSchema = z.object({
    page: z.number(),
    results: z.array(similarMovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

export type SimilarMoviesResponse = z.infer<typeof similarMoviesResponseSchema>;
