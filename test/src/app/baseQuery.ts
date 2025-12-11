import { API_KEY, BASE_URL } from "@/common/constants"
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("API-KEY", API_KEY)
    return headers
  },
})
