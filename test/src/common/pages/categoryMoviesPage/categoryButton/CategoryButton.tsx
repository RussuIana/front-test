import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const CategoryButton = styled(Button)(({ theme }) => {
    const isLight = theme.palette.mode === "light";

    const baseColor = isLight
        ? theme.palette.secondary.contrastText
        : theme.palette.primary.contrastText;

    const shadowColor = isLight
        ? theme.palette.secondary.light
        : theme.palette.primary.dark;

    const hoverColor = isLight
        ? theme.palette.secondary.dark
        : theme.palette.primary.dark;

    // фон активной кнопки в зависимости от темы
    const activeBg = isLight
        ? "#561be4" // светлая тема → синий фон
        : "#128585"; // тёмная тема → бирюзовый фон

    return {
        minWidth: "120px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "6px 30px",
        fontWeight: "bold",
        fontSize: "20px",
        textTransform: "capitalize",
        textDecoration: "none",
        borderRadius: "45px",

        // 🔹 прозрачный фон для всех неактивных кнопок
        backgroundColor: "transparent",
        color: baseColor,
        border: `1px solid ${shadowColor}`,
        boxShadow: `0 0 10px ${shadowColor}`,
        transition: "all 0.25s ease",

        "&:hover": {
            color: hoverColor,
            backgroundColor: "transparent", // фон остаётся прозрачным
        },

        /* 🔥 активная категория */
        "&.active": {
            backgroundColor: activeBg,
            color: theme.palette.getContrastText(activeBg),
        },
    };
});
