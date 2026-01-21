import type {SxProps, Theme} from "@mui/material";

export const sortByFormSx: SxProps<Theme> = (theme)=>( {
    height:"40px",
    borderRadius: "55px",
    color: theme.palette.text.secondary,
    "& .MuiOutlinedInput-input": {
        padding: "14px 16px",},
        "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.secondary,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.action.hover,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.action.selected,
    },
})