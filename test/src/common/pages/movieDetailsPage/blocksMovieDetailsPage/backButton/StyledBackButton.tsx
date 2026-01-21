import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledBackButton = styled(Button)(({theme}) => ({
        minWidth: "120px",
        display: "inline-flex",
        justifyContent: "center",
        padding: "8px 20px",
        fontWeight: "bold",
        textTransform: "capitalize",
        textDecoration: "none",
        borderRadius: "40px",
        color: theme.palette.text.primary,

        border: `1px solid ${theme.palette.mode === "light"
            ? theme.palette.secondary.light
            : theme.palette.primary.light}`,

        boxShadow: `0 0 8px ${theme.palette.mode === "light"
            ? theme.palette.secondary.light
            : theme.palette.primary.light}`,

        "&:hover": {
            color: theme.palette.mode === "light"
                ? theme.palette.secondary.light
                : theme.palette.primary.light,
        },
}));
