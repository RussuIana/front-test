import {useSearchParams} from "react-router-dom";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import Stack from "@mui/material/Stack";
import {Movies} from "@/features/discoverMovies/ui/movieCategories/movies/Movies.tsx";
import {useEffect, useState} from "react";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";
import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {Container} from "@/common/components/Container";
import {CategoryButton} from "@/common/pages/categoryMoviesPage/categoryButton/CategoryButton.tsx";
import {TitleSection} from "@/common/pages/main/titleSection/TitleSection.tsx";
import {capitalizeWords} from "@/common/utils";

const categories: { title: string; value: FilterCategory }[] = [
    {title: "Popular", value: "popular"},
    {title: "Top Rated", value: "top_rated"},
    {title: "Upcoming", value: "upcoming"},
    {title: "Now Playing", value: "now_playing"},
];

export const CategoryMovies = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [page, setPage] = useState(1);

    const activeCategory = (searchParams.get("query") as FilterCategory) || "popular";
    useEffect(() => {
        setPage(1);
    }, [activeCategory]);

    const handleCategoryClick = (category: FilterCategory) => {
        setSearchParams({query: category});
    };

    const {data} = useGetMoviesQuery({category: activeCategory, page});

    return (
        <Container>
            <div style={{paddingTop: "40px"}}>
                <Stack direction="row" spacing={2} mb={3} justifyContent="center" marginBottom="40">
                    {categories.map((cat) => (
                        <CategoryButton
                            key={cat.value}
                            className={activeCategory === cat.value ? "active" : undefined}
                            onClick={() => handleCategoryClick(cat.value)}
                        >
                            {capitalizeWords(cat.title)} Movies
                        </CategoryButton>
                    ))}
                </Stack>
                <TitleSection>
                    {capitalizeWords(categories.find(c => c.value === activeCategory)?.title?? "")} Movies
                </TitleSection>
                <Movies category={activeCategory} page={page} limit={20}/>
                <MoviePagination
                    totalPages={data?.total_pages ?? 1}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </Container>


    );
};




