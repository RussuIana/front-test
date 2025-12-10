import {z} from "zod/v4";


export const genreSchema = z.object({
    id: z.number(),
    name: z.string(),
})

export const productionCompaniesSchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
})

export const productionCountriesSchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
})

export const spokenLanguagesSchema = z.object({
    iso_639_1: z.string(),
    english_name: z.string(),
    name: z.string(),
})

export const belongsToCollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
}).nullable();



export const domainMovieDetailSchema = z.object({
    adult : z.boolean(),
    backdrop_path:z.string().nullable(),
    belongs_to_collection: belongsToCollectionSchema,
    budget:z.number().int(),
    genres:z.array(genreSchema),
    homepage:z.string().nullable(),
    id: z.number(),
    imdb_id:z.string().nullable(),
    original_language:z.string(),
    original_title:z.string(),
    overview:z.string().nullable(),
    popularity:z.number(),
    poster_path:z.string().nullable(),
    production_companies:z.array(productionCompaniesSchema),
    production_countries:z.array(productionCountriesSchema),
    release_date:z.string().nullable(),
    revenue:z.number().int(),
    runtime:z.number().int(),
    spoken_languages:z.array(spokenLanguagesSchema),
    status:z.string().nullable(),
    tagline:z.string().nullable(),
    title:z.string(),
    video:z.boolean(),
    vote_average:z.number(),
    vote_count:z.number().int(),

})

export type MovieDetail = z.infer<typeof domainMovieDetailSchema>

