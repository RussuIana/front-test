import {baseApi} from "@/app/baseApi.ts";
import type {CastMember, MovieDetail, SimilarMoviesResponse} from "@/features/discoverMovies/api/fullMovieData/schemas";

export const MovieDetailsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieInfo: build.query<MovieDetail,  number >({
            query: (movieId) => ({
                    url: `/movie/${movieId}`,
                }),
            providesTags: (_result, _error, movieId) => [{type: "Movie", id: movieId}],
        }),

        getActorsList: build.query<{cast: CastMember[]}, number >({
            query: (movieId) => ({
                url: `/movie/${movieId}/credits`,
            }),
            providesTags: (_result, _error, movieId) => [{type: "Movie", id: movieId}],
        }),

        getSimilarMovies: build.query< SimilarMoviesResponse , number >({
            query: (movieId) => ({
                url: `/movie/${movieId}/similar`,
            }),
            providesTags: (_result, _error, movieId) => [{type: "Movie", id: movieId}],
        }),
    }),

})

export const {useGetMovieInfoQuery, useGetActorsListQuery, useGetSimilarMoviesQuery}= MovieDetailsApi;


