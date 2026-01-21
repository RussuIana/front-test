import type {SxProps, Theme} from "@mui/material";


export const contentSx : SxProps<Theme> = {
    position: "absolute",
    bottom:200,
    left: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
    color: (theme) => theme.palette.text.secondary,
    zIndex: 2,
}
