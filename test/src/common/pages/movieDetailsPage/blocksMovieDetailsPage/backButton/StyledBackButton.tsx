import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledBackButton = styled(Button)(({theme}) => {

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
        justifyContent: "center",
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
