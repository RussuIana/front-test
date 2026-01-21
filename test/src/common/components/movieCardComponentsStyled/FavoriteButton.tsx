import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";

interface FavoriteButtonProps {
    isFavorite: boolean;
}

export const FavoriteButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "isFavorite",
})<FavoriteButtonProps>(({theme, isFavorite }) => ({
    opacity: isFavorite ? 1 : 0,
    position: "absolute",
    minWidth: 30,
    padding: 4,
    top: 15,
    right: 15,
    zIndex: 3,
    border: "none",
    boxShadow: "none",
    color: theme.palette.common.white,
    backgroundColor: isFavorite
        ? theme.palette.action.selected
        : theme.palette.action.hover,
    transition: "opacity 0.3s, background-color 0.3s",
    "&:hover": {
        backgroundColor: isFavorite
            ? theme.palette.action.selected
            : theme.palette.action.hover,
        opacity: 1,
    },
}));
