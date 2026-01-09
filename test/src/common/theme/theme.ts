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
                paper: isLight ? "#FFFFFF" : "#182130",
            },

            text: {
                primary: isLight ? "#1F2933" : "#E5E7EB",
                secondary: isLight ? "#4B5563" : "#9CA3AF",
                disabled: "#6B7280",
            },

            action: {
                hover: isLight
                    ? "#6691b8"
                    : "#3C8A78",
                selected: isLight
                    ? "rgba(56,84,119,0.28)"
                    : "rgba(43,107,92,0.55)",
            },

            info: {
                main: isLight ? "#385477" : "#3C8DBC",
            },

            success: { main: "#22C55E" },
            warning: { main: "#FACC15" },
            error: { main: "#EF4444" },
        },

        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 1200,
                xl: 1536,
            },
        },
    });
};
