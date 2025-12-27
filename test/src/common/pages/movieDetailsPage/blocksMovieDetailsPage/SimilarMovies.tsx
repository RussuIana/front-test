import {useParams} from "react-router";
import { useGetSimilarMoviesQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";

export const SimilarMovies = () => {
    const { id } = useParams<{ id: string }>();
    const movieId  = Number(id);
    const { data,isLoading, isFetching } = useGetSimilarMoviesQuery(movieId );

    const showProgress = isLoading || isFetching;

        return (
        <Box  >
            <Typography variant="h4" gutterBottom>
                Similar Movies
            </Typography>

            {/* LinearProgress всегда */}
            {showProgress && <LinearProgress sx={{ mb: 2 }} />}

            {/* Skeleton при загрузке */}
            {showProgress && <MovieCardSkeleton count={6} />}

            {/* Нет данных */}
            {!showProgress && (!data?.results || data.results.length === 0) && (
                <Typography>No similar movies found</Typography>
            )}
            {!showProgress && data?.results && data.results.length > 0 && (
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {data.results.slice(0, 6).map((movie) => (
                    <Box key={movie.id} sx={{ width: 100 }}>
                        <img
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://placehold.co/100x100?text=No+Image"}
                            alt={movie.title}
                            style={{ width: 100 }}
                        />
                        <Typography variant="body2">{movie.title}</Typography>
                    </Box>
                ))}
            </Box>
                )}
        </Box>
    );
};

