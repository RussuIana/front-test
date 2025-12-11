import type { MovieCategory } from "@/features/discoverMovies/api/fullMovieData/schemas/movieCategoriesApi.types.ts"

export type DomainMovie = MovieCategory & {
  filter: FilterCategory
}

export type FilterCategory = "Popular movies" | "Top rated movies" | "Upcoming movies" | "Now playing movies"
