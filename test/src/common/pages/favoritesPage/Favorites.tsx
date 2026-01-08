import {useEffect, useState, useCallback} from "react";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Container} from "@/common/components/Container";
import {PAGE_SIZE} from "@/common/constants";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";

const FAVORITES_KEY = "favorites";

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const [page, setPage] = useState(1);

    // Загружаем из localStorage при монтировании
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"
        ) as Movie[];

        setFavorites(saved);
    }, []);

    // Функция для обновления списка при добавлении/удалении
    const handleFavoritesChange = useCallback((updated: Movie[]) => {
        setFavorites(updated);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    }, []);

    // Пагинация
    const totalPages = Math.ceil(favorites.length / PAGE_SIZE);
    const currentMovies = favorites.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    return (
        <Box style={{paddingTop: "40px"}}>
            <Container>

                {/* Заголовок */}
                <Typography variant="h4" component="h1" gutterBottom>
                    Favorites
                </Typography>

                {favorites.length === 0 ? (
                    <Typography variant="h6" sx={{mt: 4}}>
                        Add movies to favorites to see them on this page.
                    </Typography>
                ) : (
                    <>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(5, 1fr)",
                                gap: 2,
                            }}
                        >
                            {currentMovies.map(movie => (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    onFavoritesChange={handleFavoritesChange} // передаем коллбек
                                />

                            ))}
                        </Box>

                        {totalPages > 1 && (
                            <Box sx={{mt: 4, display: "flex", justifyContent: "center"}}>
                                <MoviePagination
                                    totalPages={totalPages}
                                    page={page}
                                    setPage={setPage}
                                />
                            </Box>

                        )}
                    </>
                )}

            </Container>

        </Box>

    );
};
