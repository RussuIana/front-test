import {createSlice} from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        themeMode: (localStorage.getItem("theme") as ThemeMode) || "dark"
    //Читаем тему из localStorage, если есть
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode
    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
            state.themeMode = action.payload.themeMode
            localStorage.setItem("theme", action.payload.themeMode)
        }),
    }),
})
    export const { selectThemeMode  } = appSlice.selectors
    export const { changeThemeModeAC } = appSlice.actions
    export const appReducer = appSlice.reducer
    export type ThemeMode = "dark" | "light"