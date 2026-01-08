import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import Box from "@mui/material/Box";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";

type Props = {
    category: FilterCategory;
    page?: number;
    limit?: number;
};

export const Movies = ({category, page = 1, limit}: Props) => {

    // Запрос к API с правильной категорией
    const {data, isLoading, isFetching} = useGetMoviesQuery({category, page}, {refetchOnFocus: true});

    // Массив фильмов из ответа API
    const movies: Movie[] = data?.results || [];
    // Показываем Skeleton при первой загрузке или смене страницы
    const showSkeleton = isLoading || isFetching;

    const visibleMovies = limit
        ? movies.slice(0, limit)
        : movies;

    return (
        <Box>
            {/* Skeleton только при первой загрузке */}
            {showSkeleton && <MovieCardSkeleton count={limit ?? 6}/>}

            {!showSkeleton && visibleMovies.length > 0 && (
                <Box
                    sx={{
                        display: "grid",
                        gap: { xs: "16px", sm: "24px", md: "32px" }, // адаптивный gap
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",  // мобилки
                            sm: "repeat(3, 1fr)",  // планшеты
                            md: limit === 6 ? "repeat(6, 1fr)" : "repeat(5, 1fr)", // ноутбуки
                        },
                    }}
                >
                    {visibleMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </Box>
            )}
        </Box>
    );
}
