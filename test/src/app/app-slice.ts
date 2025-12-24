import {createSlice} from "@reduxjs/toolkit";
import type {RequestStatus} from "@/common/types/types.ts";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        //Читаем тему из localStorage, если есть
        themeMode: (localStorage.getItem("theme") as ThemeMode) || "dark",
        status: "idle" as RequestStatus,
        error: null as string | null,
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode,
        selectAppStatus: (state) => state.status,
        selectAppError: (state) => state.error,

    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode
            localStorage.setItem("theme", action.payload.themeMode)
        }),
        setAppStatusAC: create.reducer<{ status: RequestStatus }>((state, action) => {
            state.status = action.payload.status
        }),
        setAppErrorAC: create.reducer<{ error: string | null }>((state, action) => {
            state.error = action.payload.error
        }),
    }),
})
    export const { selectThemeMode, selectAppError, selectAppStatus  } = appSlice.selectors
    export const { changeThemeModeAC, setAppErrorAC, setAppStatusAC } = appSlice.actions
    export const appReducer = appSlice.reducer
    export type ThemeMode = "dark" | "light"