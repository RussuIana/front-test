import type { SxProps, Theme } from "@mui/material";

export const searchInputSx: SxProps<Theme> = {

        width: { xs: "100%", sm: 400, md: 600 },
        borderRadius: "40px",
        padding: "3px 20px",
        fontSize: "18px",
        fontWeight: 600,

        color: (theme) =>  theme.palette.text.primary,

        backgroundColor: (theme) =>  theme.palette.background.paper,

        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: (theme) =>
                theme.palette.mode === "light"
                    ? theme.palette.secondary.light
                    : theme.palette.primary.light,
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: (theme) =>
                theme.palette.mode === "light"
                    ? theme.palette.secondary.light
                    : theme.palette.primary.light,
            boxShadow:(theme) =>
                `0 0 8px ${
                    theme.palette.mode === "light"
                        ? theme.palette.secondary.light
                        : theme.palette.primary.light
                }`,
        },
};
