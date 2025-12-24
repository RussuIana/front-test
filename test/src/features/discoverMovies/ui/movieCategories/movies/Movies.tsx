import { useGetMoviesQuery } from "@/features/discoverMovies/api/moviesApi";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";


type Props = {
    category: FilterCategory;
};

export const Movies = ({ category }: Props) => {


    // Запрос к API с правильной категорией
    const { data,isLoading,isError } = useGetMoviesQuery({ category}, { refetchOnFocus: true });

    // Массив фильмов из ответа API
    const movies: Movie[] = data?.results || [];
    console.log(category, data);

    if (isLoading) {
        return(
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    if (isError) return <Typography>Ошибка при загрузке фильмов</Typography>;
    if (!movies.length) return <Typography>Фильмов нет</Typography>;

    return (
        <Grid container spacing={2}>
            {movies.slice(0, 6).map(movie => (
                <div key={movie.id} >
                    <MovieCard movie={movie} />
                </div>
            ))}
        </Grid>
    )
}
