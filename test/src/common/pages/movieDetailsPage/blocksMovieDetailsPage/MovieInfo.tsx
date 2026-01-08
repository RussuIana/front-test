import {useParams} from "react-router-dom";
import {useGetMovieInfoQuery} from "@/features/discoverMovies/api/movieDetailsApi";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import {BackButton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/backButton/BackButton";
import {MoviesSkeleton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/movieSkeleton/MovieSkeleton.tsx";
import {ratingColor} from "@/common/utils/reatingColor.ts";


export const MovieInfo = () => {
    const {id} = useParams<{ id: string }>();
    const movieId = Number(id);

    const {
        data: movie,
        isLoading,
    } = useGetMovieInfoQuery(movieId, {skip: !movieId});

    /* -------------------- LOADING -------------------- */
    if (isLoading) {
        return <MoviesSkeleton/>;
    }

    if (!movie) {
        return <Typography>Movie not found</Typography>;
    }

    /* -------------------- HELPERS -------------------- */
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/200x300?text=No+Image";

    const releaseYear = movie.release_date?.slice(0, 4) ?? "N/A";

    const runtime = movie.runtime
        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
        : "N/A";

    const rating = movie.vote_average
        ? movie.vote_average.toFixed(1)
        : "N/A";
    /* -------------------- UI -------------------- */
    return (
        <Box sx={{mt: 2, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
            {/* Poster */}
            <Box
                component="img"
                  src={posterUrl}
                  alt={movie.title}
                  sx={{
                      width: { xs: "100%", sm: 300 },
                      height: { xs: "auto", sm: 450 },
                      borderRadius: "10%",
                      objectFit: "cover",
                      flexShrink: 0,
                  }}
            />

                {/* Info */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box
                        sx={{
                            display: "flex", justifyContent: "space-between", alignItems: "center"
                        }}
                    >
                        <Typography variant="h4">{movie.title}</Typography>
                        <BackButton/>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            mt: 1,
                        }}
                    >
                        <Typography>Release year: {releaseYear}</Typography>

                        <Chip
                            label={rating}
                            color={
                                movie.vote_average
                                    ? ratingColor(movie.vote_average)
                                    : "default"
                            }
                            size="small"
                        />

                        <Typography>Runtime: {runtime}</Typography>
                    </Box>

                    <Typography variant="h6" sx={{mt: 2}}>
                        {movie.overview}
                    </Typography>


                    <Typography variant="h4" sx={{mt: 2}}>
                        Genres
                    </Typography>
                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 1, mt: 1}}>
                        {movie.genres.map((g) => (
                            <Chip
                                key={g.id}
                                label={g.name}
                                size="medium"
                                color="primary"
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
    );
};
