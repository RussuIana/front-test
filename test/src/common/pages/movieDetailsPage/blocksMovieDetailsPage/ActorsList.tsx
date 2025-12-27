import {useParams} from "react-router";
import {useGetActorsListQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";

export const ActorsList = () => {
    const { id } = useParams<{ id: string }>();
    const movieId  = Number(id);
    const { data,isLoading, isFetching } = useGetActorsListQuery(movieId );
    const showProgress = isLoading || isFetching;

    if (!data || !data.cast || data.cast.length === 0) return <Typography>No actors found</Typography>;

    return (
        <Box  >
            <Typography variant="h4" gutterBottom>Cast</Typography>

            {/* LinearProgress всегда */}
            {showProgress && <LinearProgress sx={{ mb: 2 }} />}

            {/* Skeleton */}
            {showProgress && (
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Box key={idx} sx={{ width: 100 }}>
                            <Skeleton variant="rectangular" width={100} height={100} />
                            <Skeleton width="80%" height={20} sx={{ mt: 0.5 }} />
                            <Skeleton width="60%" height={18} sx={{ mt: 0.5 }} />
                        </Box>
                    ))}
                </Box>
            )}

            {/* Нет данных */}
            {!showProgress && (!data?.cast || data.cast.length === 0) && (
                <Typography>No actors found</Typography>
            )}

            {/* Карточки с актёрами */}
            {!showProgress && data?.cast && data.cast.length > 0 && (
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {data.cast.slice(0, 6).map((actor) => (
                        <Box key={actor.id} sx={{ width: 100 }}>

                <img
                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://placehold.co/100x100?text=No+Image"}
                    alt={actor.name}
                    style={{ width: 100 }}
                />

                <Typography variant="body2">{actor.name} </Typography>

                <Typography variant="body2">{actor.character}</Typography>
                    </Box>
                ))}
            </Box>
                )}
        </Box>
    )}

