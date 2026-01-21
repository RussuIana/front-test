import type {SxProps} from "@mui/material";

export const actorAvatarSx : SxProps =  {
    width: 200,
    height: 200,
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    objectFit: "cover",
    overflow: "hidden",
    transition: "0.2s",
    "&:hover": {
        transform: "scale(1.05)",
    }
}