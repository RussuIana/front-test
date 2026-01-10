import type {SxProps, Theme} from "@mui/material";

const getAccentColorLight = (theme: Theme) =>
    theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.primary.light;

const getAccentColorMain = (theme: Theme) =>
    theme.palette.mode === "light"
        ? theme.palette.secondary.main
        : theme.palette.primary.main;

export const buttonReturnHomeSx : SxProps<Theme> = {
    minWidth: 120,
    display: "inline-flex",
    justifyContent: "center",
    padding: "8px 20px",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "none",
    transition: "color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
    borderRadius: "40px",

    color:(theme) => theme.palette.text.primary,
    border: (theme) => `1px solid ${getAccentColorLight(theme)}`,
    boxShadow: (theme) => `0 0 8px ${getAccentColorLight(theme)}`,
    backgroundColor:(theme) => getAccentColorMain(theme),

    "&:hover": {
        color: (theme) => getAccentColorLight(theme),
    },

    "&:focus-visible": {
        outline: "2px solid",
        outlineColor: (theme) => getAccentColorLight(theme),
        outlineOffset: "3px",
    },

}