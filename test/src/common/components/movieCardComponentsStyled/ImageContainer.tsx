import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ImageContainer = styled(Box)(() => ({
    position: "relative",
    width: "100%",
    borderRadius: "inherit",
    overflow: "hidden",
    aspectRatio: "2 / 3",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));