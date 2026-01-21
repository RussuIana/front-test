import type {SxProps, Theme} from "@mui/material";

export const moviesSx = (limit: number): SxProps<Theme> => ({
    display: "grid",
    gap: { xs: "16px", sm: "24px", md: "32px" },
    gridTemplateColumns: {
        xs: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: limit === 6 ? "repeat(6, 1fr)" : "repeat(5, 1fr)",
    },
});
