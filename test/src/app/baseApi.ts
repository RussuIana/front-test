import { createApi } from "@reduxjs/toolkit/query/react"
import {baseQuery} from "@/app/baseQuery.ts";

export const baseApi = createApi({
    reducerPath: "api",
    tagTypes: ["Movielist", "Movie"],
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions)

        // handleError(api, result)

        return result
    },
    endpoints: () => ({}),
})







