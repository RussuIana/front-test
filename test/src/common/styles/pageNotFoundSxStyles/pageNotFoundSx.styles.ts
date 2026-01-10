import type {SxProps, Theme} from "@mui/material";

export const pageNotFoundSx : SxProps<Theme> = {
    textAlign: "center",
    fontSize: 32,
    color: (theme) => theme.palette.text.secondary,
    "&:hover": {
        color: (theme) =>
            theme.palette.mode === "light"
                ? theme.palette.secondary.light
                : theme.palette.primary.light,
    },

}