import type {SxProps, Theme} from "@mui/material";

export const genreTitleSx : SxProps<Theme>= (theme) => {
return{
    mt: 4,
    mb:4,
    color: theme.palette.text.primary,
    "&:hover": {
        color: theme.palette.action.hover,
    },
}

}