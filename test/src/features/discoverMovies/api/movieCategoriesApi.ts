import { baseApi } from "@/app/baseApi.ts"
import type { DomainMovie } from "@/features/discoverMovies/lib/types"

export const movieCategoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
      getPopularMovies: build.query<DomainMovie[], void>({
          query: () => "movies/popular",
          providesTags: ["PopularMovies"],
      }),

      getTopRatedMovies: build.query<DomainMovie[], void>({
          query: () => "movies/top-rated",
          providesTags: ["TopRatedMovies"],
      }),

      getUpcomingMovies: build.query<DomainMovie[], void>({
          query: () => "movies/upcoming",
          providesTags: ["UpcomingMovies"],
      }),

      getNowPlayingMovies: build.query<DomainMovie[], void>({
          query: () => "movies/now-playing",
          providesTags: ["NowPlayingMovies"],
      }),
  }),
})
export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetNowPlayingMoviesQuery,
} =movieCategoriesApi