import { useParams } from "react-router";
import {useGetMovieInfoQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Skeleton from "@mui/material/Skeleton";

export const MovieInfo = () => {
    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);
    const { data: movie,isLoading, isFetching } = useGetMovieInfoQuery(movieId);

    const showProgress = isLoading || isFetching;

    return (
        <Box sx={{ mt: 2 }}>
            {/* LinearProgress всегда */}
            {showProgress && <LinearProgress sx={{ mb: 2 }} />}

            <Box sx={{ display: "flex", gap: 2 }}>
                {/* Постер */}
                {showProgress ? (
                    <Skeleton variant="rectangular" width={200} height={300} />
                ) : (
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://placehold.co/200x300?text=No+Image"}
                alt={movie.title}
                style={{ width: 200 }}
            />
                )}

            {/* Информация о фильме */}
            <Box sx={{ flex: 1 }}>
                {showProgress ? (
                    <>
                        <Skeleton variant="text" width="60%" height={40} />
                        <Skeleton variant="text" width="40%" height={30} sx={{ mt: 1 }} />
                        <Skeleton variant="text" width="30%" height={30} sx={{ mt: 1 }} />
                        <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
                        <Skeleton variant="text" width="50%" height={20} sx={{ mt: 1 }} />
                        <Skeleton variant="text" width="90%" height={60} sx={{ mt: 1 }} />
                    </>
                ) : movie ? (
                    <>
                <Typography variant="h4">{movie.title}</Typography>
                <Typography variant="subtitle1">Release year:{movie.release_date?.slice(0, 4)}</Typography>
                <Typography variant="body1">Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</Typography>
                <Typography variant="body2">Genres: {movie.genres?.map(g => g.name).join(", ")}</Typography>
                <Typography variant="body2">  Runtime: {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : "N/A"}</Typography>
                <Typography variant="body2">{movie.overview}</Typography>
                    </>
                ) : (
                    <Typography>Movie not found</Typography>
                )}
                </Box>
        </Box>
        </Box>
    );
};

