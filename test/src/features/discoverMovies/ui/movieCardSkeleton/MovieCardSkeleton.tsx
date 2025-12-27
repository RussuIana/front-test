import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

type Props = {
    count?: number;
};

export const MovieCardSkeleton = ({ count = 20 }: Props) => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 2, // 16px
                mt: 2, // 16px
            }}
        >
            {Array.from({ length: count }).map((_, index) => (
                <Card
                    key={index}
                    sx={{
                        width: 200,
                        position: "relative",
                    }}
                >
                    {/* Poster */}
                    <Skeleton
                        variant="rectangular"
                        width={200}
                        height={300}
                        animation="wave"
                    />

                    <CardContent>
                        {/* Title */}
                        <Skeleton height={24} animation="wave" />

                        {/* Rating chip */}
                        <Skeleton
                            variant="rounded"
                            width={48}
                            height={24}
                            sx={{ mt: 1 }}
                            animation="wave"
                        />

                        {/* Favorite button */}
                        <Skeleton
                            variant="rounded"
                            width={110}
                            height={32}
                            sx={{ mt: 1 }}
                            animation="wave"
                        />
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};
