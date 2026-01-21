import type {  Theme } from "@mui/material";

export const sectionSx = (theme: Theme) => ({
    position: "relative",
    minHeight: "100vh",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
});