import type {SxProps, Theme} from "@mui/material";


export const movieTitleSx: SxProps<Theme> = (theme) =>{
    return{

        mb:4,
        color: theme.palette.text.primary,
        "&:hover": {
            color: theme.palette.action.hover,
        },
    }
}