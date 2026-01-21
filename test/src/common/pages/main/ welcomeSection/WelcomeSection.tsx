import { Typography, Box } from "@mui/material";

export const WelcomeSection = () => {
    return (
        <Box sx={{ color: (theme) => theme.palette.text.secondary }}>
            <Typography variant="h1" sx={{ fontSize: { xs: "48px", sm: "80px", md: "100px" } }}>
                Welcome
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "24px", sm: "32px", md: "40px" } }}>
                Browse highlighted titles from TMDB
            </Typography>
        </Box>
    );
};
