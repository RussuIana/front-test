import { createTheme } from "@mui/material/styles"
import type {ThemeMode} from "@/app/app-slice.ts";


export const getTheme = (themeMode: ThemeMode) => {
    return createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: "#f6f5f5",
                dark: '#128585',
                contrastText: '#385477'
            },

            secondary: {
                main: "#f6f5f5",
                light: 'rgba(113,106,106,0.5)',
                dark: '#561be4',
                contrastText: 'rgb(62,62,62)'
            },

        },
    })
}
