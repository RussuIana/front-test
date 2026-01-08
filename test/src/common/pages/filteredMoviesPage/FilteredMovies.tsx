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
import {useTheme} from "@mui/material/styles";


export const FilteredMovies = () => {
    const theme = useTheme();
    const textColor =
        theme.palette.mode === "light"
            ? theme.palette.secondary.contrastText
            : theme.palette.primary.contrastText;

    const backGroundColor =
        theme.palette.mode === "light"
            ? theme.palette.secondary.main
            : theme.palette.primary.main;


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
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: "40px",
                gap: "32px", // расстояние между колонками
                flexWrap: "wrap", // на мобильных переносим в 1 колонку

            }}>
                <aside style={{
                    flex: "0 0 350px",
                    minWidth: "300px",
                    padding: "20px",
                    borderRadius: "8px",
                    height: "fit-content",
                    position: "sticky",
                    top: "80px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    backgroundColor:backGroundColor
                }}>
                    <Box
                        sx={{color: textColor}}>
                        <Typography variant="h4">
                            Filters / Sort
                        </Typography>
                    </Box>

                    <SortBy value={sortBy} onChange={setSortBy}/>

                    <FilterByRating value={rating} onChange={setRating}/>

                    <FilterByGenre value={genres} onChange={setGenres}/>

                    <ResetFiltersButton onReset={handleResetFilters}/>
                </aside>

                <div style={{flex: "1 1 0", minWidth: 0}}>
                    <ResultsBlock
                        sortBy={sortBy}
                        genres={genres}
                        rating={rating}
                    />
                </div>

            </div>


        </Container>


    )
}
