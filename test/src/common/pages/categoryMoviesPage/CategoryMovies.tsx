
import Button from "@mui/material/Button";
import { useSearchParams} from "react-router-dom";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Movies} from "@/features/discoverMovies/ui/movieCategories/movies/Movies.tsx";

const categories: { title: string; value: FilterCategory }[] = [
    { title: "Popular", value: "popular" },
    { title: "Top Rated", value: "top_rated" },
    { title: "Upcoming", value: "upcoming" },
    { title: "Now Playing", value: "now_playing" },
];

export const CategoryMovies = () => {


    const [searchParams, setSearchParams] = useSearchParams();

    const activeCategory =
        (searchParams.get("query") as FilterCategory) || "popular";



    const handleCategoryClick = (category: FilterCategory) => {
        // Меняем query параметр в URL
        setSearchParams({ query: category });
    };


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
            <Movies category={activeCategory} />

            {/* Здесь можно добавить пагинацию или бесконечный скролл */}
        </div>
    );
};




