import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";

export const MovieCard = styled(Card)(({theme}) => ({
    cursor: "pointer",
    width: "100%",
    borderRadius: 30,
    overflow: "visible",
    boxShadow: "none",
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
    "&:hover .favorite": {
        opacity: 1,
    },
}));



