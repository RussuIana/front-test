import {useParams} from "react-router";
import { useGetSimilarMoviesQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {MovieCardComponent} from "@/features/discoverMovies/ui/movieCardComponent/MovieCardComponent.tsx";
import {genreTitleSx} from "@/common/styles";

export const SimilarMovies = () => {
    const { id } = useParams<{ id: string }>();
    const movieId  = Number(id);
    const { data} = useGetSimilarMoviesQuery(movieId, { skip: !movieId } );

    if (!data?.results || data.results.length === 0) {
        return (
            <Typography sx={{ mt: 4 }} variant="h6" color="text.secondary">
                No similar movies found
            </Typography>
        );
    }

        return (
        <Box  sx={{ mt: 4 }}>
            <Typography variant="h4"  sx={genreTitleSx} >
                Similar Movies
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(6, 1fr)",
                    },
                    gap: 2,
                    mt: 2,
                }}
            >
                {data.results.slice(0, 6).map((movie) => (
                    <MovieCardComponent key={movie.id} movie={movie} />

                ))}
            </Box>

        </Box>
    );
};

