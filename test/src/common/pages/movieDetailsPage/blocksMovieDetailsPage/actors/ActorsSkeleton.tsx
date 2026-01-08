import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const ActorsSkeleton = () => {
    return (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {Array.from({ length: 6 }).map((_, idx) => (
                <Box key={idx} sx={{ width: 100 }}>
                    <Skeleton variant="rectangular" width={100} height={100} />
                    <Skeleton width="80%" height={20} sx={{ mt: 0.5 }} />
                    <Skeleton width="60%" height={18} sx={{ mt: 0.5 }} />
                </Box>
            ))}
        </Box>
    )
}

