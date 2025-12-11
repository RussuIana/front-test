import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas/moviesApi.schema.ts";


export type FilterCategory =
    | "popular"
    | "top_rated"
    | "upcoming"
    | "now_playing";

export type DomainMovie = Movie & {
    filter: FilterCategory;
};