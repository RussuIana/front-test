import type {BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue} from "@reduxjs/toolkit/query";
import {setAppErrorAC} from "@/app/app-slice.ts";

export const handleError = (
    api: BaseQueryApi,
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
) => {
    let error = "Some error occurred"
    if (!result.error) return

        switch (result.error.status) {
            case "FETCH_ERROR":
                error = "Network error. Check your internet connection."
                break
            case 401:
                error = "401 Unauthorized. Invalid API key"
                break
            case 404:
                error = "404 Not Found. Resource does not exist"
                break
            case 500:
                error = "Server error. Try again later."
                break
            default:
                error = "Unexpected error occurred."
        }

        api.dispatch(setAppErrorAC({ error }))
    }


