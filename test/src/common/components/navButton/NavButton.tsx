import {styled} from "@mui/material/styles";
import {NavLink} from "react-router";

export const NavButton = styled(NavLink)(({ theme }) => ({
    minWidth: "120px",
    display: "inline-flex",
    justifyContent: "center",
    padding: "8px 20px",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.25s ease",
    color: theme.palette.text.primary,

    "&:hover": {
        color: theme.palette.mode === "light"
            ? theme.palette.secondary.light   // light mode
            : theme.palette.primary.light, // dark mode
    },

    "&.active": {
        borderRadius: "40px",
        border: `1px solid ${theme.palette.mode === "light"
            ? theme.palette.secondary.light
            : theme.palette.primary.light}`,
        boxShadow: `0 0 8px ${theme.palette.mode === "light"
            ? theme.palette.secondary.light
            : theme.palette.primary.light}`,
    },
}));
