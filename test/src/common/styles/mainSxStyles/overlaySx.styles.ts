import type {SxProps, Theme} from "@mui/material";


export const overlaySx : SxProps<Theme> = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
}
