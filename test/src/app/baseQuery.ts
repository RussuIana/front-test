import { API_KEY, BASE_URL } from "@/common/constants"
import {type FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {handleError} from "@/common/utils";
import type {BaseQueryApi} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,

})
export const baseQueryWithApiKey = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: Record<string, unknown>= {}) => {
    if (typeof args === "string") args = {url: args, params: {}}
    args.params = { ...args.params, api_key: API_KEY };

const result = await baseQuery(args, api, extraOptions)

handleError(api, result)

return result
};