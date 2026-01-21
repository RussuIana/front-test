import {SortBy} from "@/common/pages/filteredMoviesPage/sortByForm/SortBy.tsx";
import {
    FilterByRating
} from "@/common/pages/filteredMoviesPage/filterByRating/FilterByRating.tsx";
import {
    FilterByGenre
} from "@/common/pages/filteredMoviesPage/filterByGenre/FilterByGenre.tsx";
import {
    ResetFiltersButton
} from "@/common/pages/filteredMoviesPage/resetFiltersButton/ResetFiltersButton.tsx";
import {ResultsBlock} from "@/common/pages/filteredMoviesPage/resultsBlock/ResultsBlock.tsx";
import {useState} from "react";
import {INITIAL_GENRES, INITIAL_RATING, INITIAL_SORT} from "@/common/constants";
import type {MovieSortOption} from "@/common/pages/filteredMoviesPage/sortByForm/SortByForm.tsx";
import {Container} from "@/common/components/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {asideSx, contentMoviesSx, layoutSx} from "@/common/styles";


export const FilteredMovies = () => {

    const [sortBy, setSortBy] = useState<MovieSortOption>("popularity.desc");
    const [genres, setGenres] = useState<number[]>(INITIAL_GENRES);
    const [rating, setRating] = useState<[number, number]>(INITIAL_RATING);

    const handleResetFilters = () => {
        setSortBy(INITIAL_SORT);
        setGenres(INITIAL_GENRES);
        setRating(INITIAL_RATING);
    };

    return (
        <Container>
            <Box sx={layoutSx} >
                <Box component="aside" sx={asideSx}>
                        <Typography variant="h5"  color="text.primary">
                            Filters / Sort
                        </Typography>

                    <SortBy value={sortBy} onChange={setSortBy}/>

                    <FilterByRating value={rating} onChange={setRating}/>

                    <FilterByGenre value={genres} onChange={setGenres}/>

                    <ResetFiltersButton onReset={handleResetFilters}/>
                </Box>

                <Box sx={contentMoviesSx}>
                    <ResultsBlock
                        sortBy={sortBy}
                        genres={genres}
                        rating={rating}
                    />
                </Box>
            </Box>
        </Container>


    )
}
