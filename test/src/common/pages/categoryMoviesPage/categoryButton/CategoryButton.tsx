import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

export const CategoryButton = styled(Button)(({theme}) => {

    const accentColor  =theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.primary.light;

    return{
        minWidth: "120px",
        display: "inline-flex",
        justifyContent: "center",
        padding: "6px 30px",
        fontWeight: "bold",
        textDecoration: "none",
        transition: "all 0.25s ease",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "40px",
        border: `1px solid ${accentColor }`,
        boxShadow: `0 0 8px ${accentColor }`,

        "&:hover": {
            color: accentColor ,
        },

        "&.active": {
            borderRadius: "40px",
            border: `1px solid ${accentColor }`,
            boxShadow: `0 0 8px ${accentColor }`,
            color: accentColor ,
            backgroundColor: theme.palette.background.default,
        },
    }
});
