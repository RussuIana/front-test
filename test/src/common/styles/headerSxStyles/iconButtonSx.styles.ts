import type {SxProps, Theme} from "@mui/material";


export const iconButtonSx : SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: 36, sm: 40 },       // mai mic pe mobile
    height: { xs: 36, sm: 40 },
    borderRadius: "50%",
    border: (theme) =>
        `2px solid ${theme.palette.mode ===   "light"
            ? theme.palette.secondary.light
            : theme.palette.primary.light}`,
    transition: "all 0.2s ease",
    "&:hover": {
        boxShadow: (theme) =>
            `0 0 6px ${theme.palette.action.hover}`
    },
}
