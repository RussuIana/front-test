import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export const MoviesSkeleton = () => {
    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            <Skeleton variant="rectangular" width={200} height={300} />

            <Box sx={{ flex: 1 }}>
                <Skeleton variant="text" width="60%" height={40} />
                <Skeleton variant="text" width="40%" height={30} sx={{ mt: 1 }} />
                <Skeleton variant="text" width="30%" height={30} sx={{ mt: 1 }} />
                <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
                <Skeleton variant="text" width="90%" height={60} sx={{ mt: 1 }} />
            </Box>
        </Box>
    )
}