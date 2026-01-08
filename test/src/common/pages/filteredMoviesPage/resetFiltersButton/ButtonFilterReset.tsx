import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ButtonFilterReset = styled(Button)(({ theme }) => {
    const isLight = theme.palette.mode === "light";

    return {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px 16px",
        fontWeight: "bold",
        fontSize: "18px",
        textTransform: "capitalize",
        textDecoration: "none",
        borderRadius: "25px",

        // 🔹 Цвет фона и текста в зависимости от темы
        backgroundColor: isLight ? "#561be4" : "#128585",
        color: theme.palette.getContrastText(isLight ? "#561be4" : "#128585"),

        border: "none",
        boxShadow: "none",

        "&:hover": {
            backgroundColor: isLight ? "#4500b5" : "#0f6161", // чуть темнее при hover
        },
    };
});
