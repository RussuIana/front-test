import type { MovieCategory } from "@/features/discoverMovies/api/fullMovieData/schemas/movieCategoriesApi.types.ts"

export type DomainMovie = MovieCategory & {
  filter: FilterMovie
}

export type FilterMovie = "Popular movies" | "Top rated movies" | "Upcoming movies" | "Now playing movies"
