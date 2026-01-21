import { styled } from "@mui/material/styles";

export const TitleSection = styled("h1")(({ theme }) => ({
    minWidth: "120px",
    display: "inline-flex",
    fontWeight: "bold",
    fontSize: "40px",
    textTransform: "capitalize",
    textDecoration: "none",

    color: theme.palette.text.primary,

    cursor: "pointer",
    transition: "all 0.25s ease",

    "&:hover": {
        color: theme.palette.action.hover,
    },
}));
