import type { SxProps, Theme } from "@mui/material";

export const searchButtonSx: SxProps<Theme> = {
    borderRadius: "35px",
    padding: "14px 20px",
    fontSize: "18px",
    fontWeight: 600,
    textTransform: "capitalize",
    color: (theme) => theme.palette.text.primary,
    border: (theme) =>
        `1px solid ${
            theme.palette.mode === "light"
                ? theme.palette.secondary.light
                : theme.palette.primary.light
        }`,
    backgroundColor: (theme) => theme.palette.background.paper,
    "&:hover": {
        borderColor: (theme) =>
            theme.palette.mode === "light"
                ? theme.palette.secondary.light
                : theme.palette.primary.light,
        boxShadow: (theme) =>
            `0 0 8px ${
                theme.palette.mode === "light"
                    ? theme.palette.secondary.light
                    : theme.palette.primary.light
            }`,
        backgroundColor: (theme) => theme.palette.background.paper,
    },
    "&.Mui-disabled": {
        color: (theme) => theme.palette.action.disabled,
        borderColor: (theme) => theme.palette.action.disabled,
        backgroundColor: (theme) => theme.palette.action.disabledBackground,
    },
    transition: "all 0.25s ease",
};
