import {NavLink} from "react-router-dom";
import {styled} from "@mui/material/styles";

export const ViewMoreButton = styled(NavLink)(({theme}) => ({
    minWidth: "120px",
    display: "inline-flex",
    padding: "8px 20px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.25s ease",
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
