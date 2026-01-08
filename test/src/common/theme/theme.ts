import {createTheme} from "@mui/material/styles"
import type {ThemeMode} from "@/app/app-slice.ts";


export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,

            primary: {
                main: "rgba(113,106,106,0.5)",
                dark: '#128585',
                contrastText: '#385477'
            },

            secondary: {
                main: "#f6f5f5",
                light: 'rgba(113,106,106,0.5)',
                dark: '#561be4',
                contrastText: 'rgb(62,62,62)'
            },

            // например, для GlobalLoader
            info: {
                main: "#385477"
            },

            /* 🔥 ЦВЕТА ДЛЯ АКТИВНЫХ ЭЛЕМЕНТОВ */
            action: {
                selected:
                    themeMode === "light"
                        ? "#561be4"
                        : "#128585",

                selectedOpacity: 1,
            },
        },
        breakpoints: {  // корректный способ задать медиа-запросы
            values: {xs: 0, sm: 576, md: 768, lg: 1200, xl: 1536}
        }
    })
}
