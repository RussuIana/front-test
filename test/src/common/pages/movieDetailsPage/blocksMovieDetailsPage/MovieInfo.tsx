import { useParams } from "react-router";
import {useGetMovieInfoQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

export const MovieInfo = () => {
    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);
    const { data: movie,isLoading } = useGetMovieInfoQuery(movieId);
    if (isLoading) {
        return(
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            )
}
    if (!movie) return <Typography>Movie not found</Typography>;
    return (
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {/* Постер */}
            <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://placehold.co/200x300?text=No+Image"}
                alt={movie.title}
                style={{ width: 200 }}
            />

            {/* Информация о фильме */}
            <Box>
                <Typography variant="h4">{movie.title}</Typography>
                <Typography variant="subtitle1">Release year:{movie.release_date?.slice(0, 4)}</Typography>
                <Typography variant="body1">Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</Typography>
                <Typography variant="body2">Genres: {movie.genres?.map(g => g.name).join(", ")}</Typography>
                <Typography variant="body2">  Runtime: {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : "N/A"}</Typography>
                <Typography variant="body2">{movie.overview}</Typography>
            </Box>
        </Box>
    );
};

