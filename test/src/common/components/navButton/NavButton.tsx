import {styled} from "@mui/material/styles"
import {NavLink} from "react-router-dom";

export const NavButton = styled(NavLink,{
    shouldForwardProp: (prop) =>prop !== "activeTheme",
    })<{ activeTheme?: "light" | "dark" }>(({theme, activeTheme})=>({
        minWidth: "120px",
        display: "inline-flex",
        padding: "8px 20px",
        fontWeight: "bold",
        textTransform: "capitalize",
        textDecoration: "none",
        transition: "all 0.25s ease",

        ...(activeTheme === "light" && {
            color: theme.palette.secondary.contrastText,
            "&:hover": {
                color: theme.palette.secondary.dark
            },
        }),

        ...(activeTheme === "dark" && {
            color: theme.palette.primary.contrastText,
            "&:hover": {
                color: theme.palette.primary.dark
            },
        }),

        // Активная кнопка
        "&.active": {
            borderRadius: "40px",
            ...(activeTheme === "light" && {
                boxShadow: `0 0 10px ${theme.palette.secondary.light}`,
                borderColor: theme.palette.secondary.light,
            }),

            ...(activeTheme === "dark" && {
                boxShadow: `0 0 10px ${theme.palette.primary.dark}`,
                borderColor: theme.palette.primary.dark,
            })
        }
    })
)