import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQueryWithApiKey} from "@/app/baseQuery.ts"


export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["Movie"],
   baseQuery:baseQueryWithApiKey,


  endpoints: () => ({}),
})
