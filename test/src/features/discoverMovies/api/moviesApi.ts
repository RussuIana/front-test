import {baseApi} from "@/app/baseApi.ts";
import type {GetMoviesResponse} from "@/features/discoverMovies/api/fullMovieData/schemas/moviesApi.schema.ts";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<GetMoviesResponse, { category: FilterCategory; page?: number }>({
            query: ({category, page = 1}) => {
                return {
                    url: `movie/${category}`,
                    params: {page},
                }
            },
            providesTags: (_result, _error, {category}) => [{type: "Movie", id: category}],
        }),

        getSearchMovies: build.query<
            GetMoviesResponse,
            { query: string; page?: number }
        >({
            query: ({query, page = 1}) => ({
                url: "search/movie",
                params: {
                    query,
                    page,
                },
            }),
        }),

        getFilteredMovies: build.query<GetMoviesResponse, {
            genres?: number[];
            rating?: [number, number];
            sortBy?: string;
            page?: number;
        }>({
            query: ({
                        genres = [],
                        rating = [0, 10],
                        sortBy = "popularity.desc",
                        page = 1
                    }
            ) => ({
                url: "discover/movie",
                params: {
                    ...(genres.length && {with_genres: genres.join(",")}),
                    "vote_average.gte": rating[0],
                    "vote_average.lte": rating[1],
                    sort_by: sortBy,
                    page,
                },
            }),
            providesTags: ["Movie"],
        }),

        getGenres: build.query<{ genres: { id: number; name: string }[] }, void>({
            query: () => ({url: "genre/movie/list"}),
        }),

    }),
})

export const {useGetMoviesQuery, useGetSearchMoviesQuery, useGetFilteredMoviesQuery, useGetGenresQuery} = moviesApi;