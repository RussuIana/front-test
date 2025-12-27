import { useGetMoviesQuery } from "@/features/discoverMovies/api/moviesApi";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import Grid from "@mui/material/Grid";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import Box from "@mui/material/Box";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";

type Props = {
    category: FilterCategory;
    page?: number;
    limit?: number;
};

export const Movies = ({ category,page,limit }: Props) => {

    // Запрос к API с правильной категорией
    const { data,isLoading,isFetching } = useGetMoviesQuery({ category,page}, { refetchOnFocus: true });

    // Массив фильмов из ответа API
    const movies: Movie[] = data?.results || [];
    // Показываем Skeleton при первой загрузке или смене страницы
    const showSkeleton = isLoading|| isFetching;


    return (
        <Box>


            {/* Skeleton только при первой загрузке */}
            {showSkeleton && <MovieCardSkeleton count={limit ?? 6} />}
            {!showSkeleton && movies.length > 0 && (
                <Grid container spacing={2}>
                    {(limit ? movies.slice(0, limit) : movies).map((movie) => (
                        <Grid key={movie.id}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
