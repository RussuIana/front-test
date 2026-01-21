import type {SxProps, Theme} from "@mui/material";

export const asideSx: SxProps<Theme> = (theme) => ({
    display: "flex",
    flexDirection: "column",
    width: 350,
    minWidth: 300,
    height:"100%",
    p: 2.5,
    top: 80,
    gap: 4,
    borderRadius: 4,
    backgroundColor:
        theme.palette.mode === "light"
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
});