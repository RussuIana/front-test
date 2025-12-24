import {z} from "zod/v4";


export const  movieSchema = z.object({
adult :z.boolean(),
    backdrop_path:z.string().nullable(),
    genre_ids:z.array(z.number()),
    id:z.number(),
    original_language:z.string(),
    original_title:z.string(),
    overview:z.string().nullable(),
    popularity:z.number(),
    poster_path:z.string().nullable(),
    release_date:z.string().nullable(),
    title:z.string(),
    video:z.boolean(),
    vote_average:z.number(),
    vote_count:z.number().int(),
})

export type Movie = z.infer<typeof movieSchema>

export const getMoviesResponseSchema = z.object({
    page: z.number(),
    total_pages: z.number(),
    total_results: z.number(),
    results: z.array(movieSchema),
});
export type GetMoviesResponse = z.infer<typeof getMoviesResponseSchema>