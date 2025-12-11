import type {SxProps} from "@mui/material";


export const iconButtonSx : SxProps = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "2px solid #BAB6B6FF",   // РАМКА ВОКРУГ ИКОНКИ
    "&:hover": {
        borderColor: "#087EA4", //  ПРИ НАВЕДЕНИИ
    },
}
