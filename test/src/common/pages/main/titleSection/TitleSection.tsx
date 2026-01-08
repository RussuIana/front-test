
import { styled, useTheme } from "@mui/material/styles";

export const TitleSection = styled("h1")(() => {
    const theme = useTheme();
    const isLight = theme.palette.mode === "light";

    const color = isLight
        ? theme.palette.secondary.contrastText
        : theme.palette.primary.contrastText;

    const hoverColor = isLight
        ? theme.palette.secondary.dark
        : theme.palette.primary.dark;


    return {
        minWidth: "120px",
        display: "inline-flex",
        fontWeight: "bold",
        fontSize: "40px",
        textTransform: "capitalize",
        textDecoration: "none",
        borderRadius: "40px",
        color,

        "&:hover": {
            color: hoverColor,
        },
    };
});
