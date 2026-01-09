import type {SxProps, Theme} from "@mui/material";

export const footerSx : SxProps<Theme> = (theme)=>( {
    width: "100%",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto",
    color: theme.palette.text.secondary,
    backgroundColor:
        theme.palette.mode === "light"
            ? theme.palette.secondary.main
            : theme.palette.primary.dark,

})