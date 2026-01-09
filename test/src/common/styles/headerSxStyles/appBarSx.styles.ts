import type {SxProps, Theme} from "@mui/material";

export const appBarSx : SxProps<Theme> =  {
    position: "fixed",
    top: 0,
    width: "100%",       // чтобы растягивался на всю ширину
    zIndex: (theme) => theme.zIndex.drawer + 1, // поверх остальных элементов
    backgroundColor: (theme) =>
        theme.palette.mode === "light"
            ? theme.palette.secondary.main
            : theme.palette.primary.dark
}