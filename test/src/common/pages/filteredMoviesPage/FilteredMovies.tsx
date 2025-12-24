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
        <div style={{ display: "flex", }}>
            <div style={{ width: "20%" ,background:"gray", padding: "20px",gap:"5px" }}>
                <h1>Filters / Sort</h1>
                <SortBy value={sortBy} onChange={setSortBy} />

                <FilterByRating value={rating} onChange={setRating} />

                <FilterByGenre value={genres} onChange={setGenres} />

                <ResetFiltersButton onReset={handleResetFilters}/>
            </div>
            <div>
                <ResultsBlock
                    sortBy={sortBy}
                    genres={genres}
                    rating={rating}
                />
            </div>
        </div>

    )
}
