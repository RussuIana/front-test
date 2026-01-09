import {createSlice} from "@reduxjs/toolkit";
import type {RequestStatus} from "@/common/types/types.ts";

interface AppState {
    themeMode: ThemeMode;
    status: RequestStatus;
    error: string | null;
}

const initialState: AppState = {
    themeMode: (localStorage.getItem("theme") as ThemeMode) || "dark",
    status: "idle",
    error: null,
};
export const appSlice = createSlice({
    name: "app",
    initialState,

    selectors: {
        selectThemeMode: (state) => state.themeMode,
        selectAppError: (state) => state.error,

    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode
            localStorage.setItem("theme", action.payload.themeMode)
        }),
        setAppErrorAC: create.reducer<{ error: string | null }>((state, action) => {
            state.error = action.payload.error
        }),
    }),
})
    export const { selectThemeMode, selectAppError,  } = appSlice.selectors
    export const { changeThemeModeAC, setAppErrorAC,  } = appSlice.actions
    export const appReducer = appSlice.reducer
    export type ThemeMode = "dark" | "light"