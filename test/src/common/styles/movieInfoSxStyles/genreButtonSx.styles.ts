
import type {SxProps, Theme} from "@mui/material";


export const genreButtonSx :SxProps<Theme> = (theme)=> {

    const accentColor = theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.primary.light
    return {
        minWidth: "100px",
        display: "inline-flex",
        justifyContent: "center",
        padding: "10px 20px",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "all 0.25s ease",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "40px",
        border: `1px solid ${accentColor}`,
        boxShadow: `0 0 8px ${accentColor}`,

        "&:hover": {
            color: accentColor,
        },
    }
};
