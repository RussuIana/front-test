import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ButtonFilterReset = styled(Button)(({ theme }) => {

    return {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px 16px",
        fontWeight: "bold",
        fontSize: "18px",
        textTransform: "capitalize",
        textDecoration: "none",
        border: "none",
        boxShadow: "none",
        borderRadius: "25px",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.info.main,
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        },
    };
});
