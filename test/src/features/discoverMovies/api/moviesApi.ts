import {baseApi} from "@/app/baseApi.ts";
import type {GetMoviesResponse} from "@/features/discoverMovies/api/fullMovieData/schemas/moviesApi.types.ts";
import {PAGE_SIZE} from "@/common/constants";


export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMovies: build.query<GetMoviesResponse, {category: string; page?: number }>({
            query: ({ category, page = 1 }) => {
                return {
                    url:  `movies/${category}`,
                    params: {page, count: PAGE_SIZE},
                }
            },
            providesTags: (_result, _error, { category}) => [{type: "Movie", id: category}],
            // keepUnusedDataFor: 12,
        }),

    }),
})