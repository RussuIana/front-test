import type {SxProps, Theme} from "@mui/material";

export const sortBySx : SxProps<Theme> = (theme)=>( {
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.primary,

})