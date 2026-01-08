import { NavLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

export const ViewMoreButton = styled(NavLink)(() => {
    const theme = useTheme();
    const isLight = theme.palette.mode === "light";

    const color = isLight
        ? theme.palette.secondary.contrastText
        : theme.palette.primary.contrastText;

    const hoverColor = isLight
        ? theme.palette.secondary.dark
        : theme.palette.primary.dark;

    const shadowColor = isLight
        ? theme.palette.secondary.light
        : theme.palette.primary.dark;

    return {
        minWidth: "120px",
        display: "inline-flex",
        padding: "8px 20px",
        fontWeight: "bold",
        textTransform: "capitalize",
        textDecoration: "none",
        borderRadius: "40px",
        color,
        border: `1px solid ${shadowColor}`,
        boxShadow: `0 0 10px ${shadowColor}`,
        transition: "color 0.25s ease",

        "&:hover": {
            color: hoverColor,
        },
    };
});
