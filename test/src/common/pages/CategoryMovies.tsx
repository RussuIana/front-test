import { useState} from "react";
import Button from "@mui/material/Button";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/discoverMovies/api/movieCategoriesApi";
import type {DomainMovie} from "@/features/discoverMovies/lib/types";
import {useSearchParams} from "react-router-dom";

export const CategoryMovies = () => {

    // Загружаем данные для всех категорий (можно оптимизировать потом)
    const { data: popular } = useGetPopularMoviesQuery();
    const { data: topRated } = useGetTopRatedMoviesQuery();
    const { data: upcoming } = useGetUpcomingMoviesQuery();
    const { data: nowPlaying } = useGetNowPlayingMoviesQuery();

    const [searchParams] = useSearchParams();
    const categoryQuery = searchParams.get("query");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryQuery);


    const categoryData: Record<string, DomainMovie[] | undefined> = {
        popular: popular,
        top_rated: topRated,
        upcoming: upcoming,
        now_playing: nowPlaying
    };

    const categoryTitles: Record<string, string> = {
        popular: "Popular Movies",
        top_rated: "Top Rated Movies",
        upcoming: "Upcoming Movies",
        now_playing: "Now Playing Movies",
    };
    const categories=Object.keys(categoryData);
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
                        {categoryTitles[c]}
                    </Button>

                ))}
            </div>

            <div>
                {movies.map(m => (
                    <div key={m.id} style={{ marginBottom: 8 }}>
                        {m.name}
                    </div>
                ))}
            </div>
        </div>
    );
};




