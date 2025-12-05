import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "@/app/baseQuery.ts"


export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["PopularMovies","TopRatedMovies" ,"UpcomingMovies", "NowPlayingMovies","Movie"],
   baseQuery,


    // handleError(api, result)

  endpoints: () => ({}),
})
