import { useEffect, useState, useCallback } from "react";
import { MovieCard } from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import type { Movie } from "@/features/discoverMovies/api/fullMovieData/schemas";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FAVORITES_KEY = "favorites";

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);



    // Загружаем из localStorage при монтировании
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"
        )as Movie[];

        setFavorites(saved);
    }, []);

    // Функция для обновления списка при добавлении/удалении
    const handleFavoritesChange = useCallback((updated: Movie[]) => {
        setFavorites(updated);
    }, []);
return (
    <Box>
        {/* Заголовок */}
        <Typography variant="h4" component="h1" gutterBottom>
            Favorites
        </Typography>

        {favorites.length===0?(
            <Typography variant="h6" sx={{ mt: 4 }}>
                Add movies to favorites to see them on this page.
            </Typography>
        ):(
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, 200px)",
                    gap: 2,
                }}
            >
                {favorites.map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onFavoritesChange={handleFavoritesChange} // передаем коллбек
                    />
                ))}
            </Box>
            )}
        </Box>


    );
};
