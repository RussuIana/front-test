import type { MovieCategory } from "@/features/discoverMovies/api/movieCategoriesApi.types.ts"

export type DomainMovie = MovieCategory & {
  filter: FilterMovie
}

export type FilterMovie = "popular_movies" | "top_rated_movies" | "upcoming_movies" | "now_playing_movies"
