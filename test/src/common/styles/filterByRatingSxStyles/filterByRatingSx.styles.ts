import type {SxProps, Theme} from "@mui/material";

export const filterByRatingSx : SxProps<Theme> = (theme)=>( {
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.primary,

})