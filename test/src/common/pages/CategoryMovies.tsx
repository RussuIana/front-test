import { useState } from "react";
import Button from "@mui/material/Button";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/discoverMovies/api/movieCategoriesApi";
import type {DomainMovie, FilterMovie} from "@/features/discoverMovies/lib/types";
export const CategoryMovies = () => {
    const [selectedCategory, setSelectedCategory] = useState<FilterMovie | null>(null);

    // Загружаем данные для всех категорий (можно оптимизировать потом)
    const { data: popular } = useGetPopularMoviesQuery();
    const { data: topRated } = useGetTopRatedMoviesQuery();
    const { data: upcoming } = useGetUpcomingMoviesQuery();
    const { data: nowPlaying } = useGetNowPlayingMoviesQuery();

    const categoryData: Record<FilterMovie, DomainMovie[] | undefined> = {
        "Popular movies": popular,
        "Top rated movies": topRated,
        "Upcoming movies": upcoming,
        "Now playing movies": nowPlaying
    };
    const categories: FilterMovie[] = [
        "Popular movies",
        "Top rated movies",
        "Upcoming movies",
        "Now playing movies"
    ];

    const movies = selectedCategory ? categoryData[selectedCategory]?? [] : [];

    return (
        <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {categories.map(c => (
                    <Button
                        key={c}
                        variant={selectedCategory === c ? "contained" : "outlined"}
                        onClick={() => setSelectedCategory(c)}
                        sx={{ textTransform: "none" }}
                    >
                        {c}
                    </Button>
                ))}
            </div>

            <div>
                {movies.map(m => (
                    <div key={m.id} style={{ marginBottom: 8 }}>
                        {m.name ?? m.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
