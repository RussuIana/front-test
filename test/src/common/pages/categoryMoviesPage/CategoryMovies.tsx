
import Button from "@mui/material/Button";
import { useSearchParams} from "react-router-dom";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Movies} from "@/features/discoverMovies/ui/movieCategories/movies/Movies.tsx";
import {useEffect, useState} from "react";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";
import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";

const categories: { title: string; value: FilterCategory }[] = [
    { title: "Popular", value: "popular" },
    { title: "Top Rated", value: "top_rated" },
    { title: "Upcoming", value: "upcoming" },
    { title: "Now Playing", value: "now_playing" },
];

export const CategoryMovies = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const activeCategory =
        (searchParams.get("query") as FilterCategory) || "popular";

    // Сбрасываем страницу при смене категории
    useEffect(() => {
        setPage(1);
    }, [activeCategory]);

    const handleCategoryClick = (category: FilterCategory) => {
        // Меняем query параметр в URL
        setSearchParams({ query: category });
    };

    const { data, isLoading } = useGetMoviesQuery({ category: activeCategory, page });

    if (isLoading) return null;
    return (
        <div style={{ padding: "24px" }}>
            {/* Кнопки выбора категории */}
            <Stack direction="row" spacing={2} mb={3}>
                {categories.map((cat) => (
                    <Button
                        key={cat.value}
                        variant={activeCategory === cat.value ? "contained" : "outlined"}
                        onClick={() => handleCategoryClick(cat.value)}
                    >
                        {cat.title}
                    </Button>
                ))}
            </Stack>

            {/* Заголовок текущей категории */}
            <Typography variant="h4" gutterBottom>
                {categories.find(c => c.value === activeCategory)?.title} Movies
            </Typography>

            {/* Список фильмов */}
            <Movies category={activeCategory} page={page} limit={20}/>

            {/* Здесь можно добавить пагинацию или бесконечный скролл */}
            <MoviePagination
                totalCount={data?.total_pages ?? 1}  // сюда нужно передать реальное количество страниц из API
                page={page}
                setPage={setPage}
            />

        </div>
    );
};




