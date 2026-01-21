import type { SxProps, Theme } from "@mui/material";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";

export const backgroundSx = (backdropPath: string | null): SxProps<Theme> => ({
    position: "absolute",
    inset: 0,
    zIndex: 0,
    backgroundImage: backdropPath ? `url(${TMDB_IMAGE_BASE}${backdropPath})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 1s ease-in-out",
    opacity: backdropPath ? 1 : 0,
});
