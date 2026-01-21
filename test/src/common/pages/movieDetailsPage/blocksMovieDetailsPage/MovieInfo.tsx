import {useParams} from "react-router-dom";
import {useGetMovieInfoQuery} from "@/features/discoverMovies/api/movieDetailsApi";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import {BackButton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/backButton/BackButton";
import {MoviesSkeleton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/movieSkeleton/MovieSkeleton.tsx";
import {ratingColor} from "@/common/utils/reatingColor.ts";
import {genreButtonSx, genreTitleSx, movieTitleSx, posterSx} from "@/common/styles";


export const MovieInfo = () => {
    const {id} = useParams<{ id: string }>();
    const movieId = Number(id);

    const {data: movie, isLoading,} = useGetMovieInfoQuery(movieId, {skip: !movieId});

    if (isLoading) {
        return <MoviesSkeleton/>;
    }

    if (!movie) {
        return <Typography variant={"h5"} color="text.secondary">Movie not found</Typography>;
    }

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

    return (
        <Box sx={{mt: 2, display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 4 }}>
            <Box
                component="img"
                  src={posterUrl}
                  alt={movie.title}
                  sx={posterSx}
            />

                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                        <Typography variant="h3" sx={movieTitleSx}>{movie.title}</Typography>
                        <BackButton/>
                    </Box>

                    <Box sx={{display: "flex", gap: 2, alignItems: "center", mt: 1,}}>
                        <Typography variant="h6" color="text.secondary">Release year: {releaseYear}</Typography>

                        <Chip
                            sx={{ fontSize: 20 }}
                            label={rating}
                            size="medium"
                            color={
                                movie.vote_average
                                    ? ratingColor(movie.vote_average)
                                    : "default"
                            }
                        />

                        <Typography variant="h6" color="text.secondary">Runtime: {runtime}</Typography>
                    </Box>

                    <Typography variant="h5" color="text.secondary" sx={{mt: 2}}>
                        {movie.overview}
                    </Typography>


                    <Typography variant="h4"  sx={genreTitleSx}>
                        Genres
                    </Typography>
                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 2, mt: 1}}>
                        {movie.genres.map((g) => (
                            <Chip
                                sx={genreButtonSx}
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
