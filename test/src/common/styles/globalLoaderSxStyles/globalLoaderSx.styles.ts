import type {SxProps, Theme} from "@mui/material";

export const globalLoaderSx: SxProps<Theme> = (theme) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 9999,
    height: 4,
    backgroundColor: theme.palette.action.selected,

    '& .MuiLinearProgress-bar': {
        backgroundColor: theme.palette.info.main
    },

    "& .MuiLinearProgress-bar, &": {
        transition: "all 0.3s ease",
    },

})