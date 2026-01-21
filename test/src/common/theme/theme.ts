import type { ThemeMode } from "@/app/app-slice";
import { createTheme } from "@mui/material";

export const getTheme = (themeMode: ThemeMode) => {
    const isLight = themeMode === "light";

    return createTheme({
        palette: {
            mode: themeMode,

            primary: {
                main:  "#141C2C",
                dark:  "#0f172a",
                light:"#3C8A78",
            },

            secondary: {
                main:  "#E0E7EF" ,
                dark:  "#2C3E5E" ,
                light:  "#6691b8" ,
            },

            background: {
                default: isLight ? "#F9FAFB" : "#0B1120",
                paper: isLight ? "#dfe6ee" : "#182130",
            },

            text: {
                primary: isLight ? "#1F2933" : "#E5E7EB",
                secondary: isLight ? "#4B5563" : "#9CA3AF",
                disabled: isLight ? "#CAC1C1FF" : "#65B3A08C",
            },

            action: {
                hover: isLight
                    ? "#6691b8"
                    : "#3C8A78",
                selected: isLight
                    ? "#38547747"
                    : "#65B3A08C",
                disabled: isLight
                    ? "#aaa1a1"
                    : "#65B3A08C",
            },

            info: {
                main: isLight ? "#91b3d1" : "#2e6054",
            },

            success: { main: "#22C55E" },
            warning: { main: "#FACC15" },
            error: { main: "#EF4444" },
        },

    });
};
