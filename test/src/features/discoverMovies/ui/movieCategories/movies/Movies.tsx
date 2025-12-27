import { useGetMoviesQuery } from "@/features/discoverMovies/api/moviesApi";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";


type Props = {
    category: FilterCategory;
};

export const Movies = ({ category }: Props) => {


    // Запрос к API с правильной категорией
    const { data,isLoading,isError,isFetching } = useGetMoviesQuery({ category}, { refetchOnFocus: true });

    // Массив фильмов из ответа API
    const movies: Movie[] = data?.results || [];

    const showProgress = isLoading || isFetching;


    if (isError) return <Typography>Ошибка при загрузке фильмов</Typography>;
    if (!movies.length) return <Typography>Фильмов нет</Typography>;

    return (
        <Box>
            {/* LinearProgress */}
            {showProgress && <LinearProgress sx={{ mb: 2 }} />}

            {/* Skeleton */}
            {showProgress && <MovieCardSkeleton count={6} />}

            {/* Error */}
            {!showProgress && isError && (
                <Typography>Ошибка при загрузке фильмов</Typography>
            )}

            {/* Empty */}
            {!showProgress && !isError && movies.length === 0 && (
                <Typography>Фильмов нет</Typography>
            )}

            {/* Данные */}
            {!showProgress && movies.length > 0 && (
                <Grid container spacing={2}>
                    {movies.slice(0, 6).map((movie) => (
                        <Grid item key={movie.id}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
