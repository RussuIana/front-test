import {useGetFilteredMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {MovieCardComponent} from "@/features/discoverMovies/ui/movieCardComponent/MovieCardComponent.tsx";
import Box from "@mui/material/Box";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";
import {useEffect, useState} from "react";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";
import {resultsBlockSx} from "@/common/styles";

type Props = {
    genres: number[];
    rating: [number, number];
    sortBy: string;
};

export const ResultsBlock = ({genres, rating, sortBy}: Props) => {
    const [page, setPage] = useState(1)

    const {data, isLoading, isFetching} = useGetFilteredMoviesQuery({
        genres,
        rating,
        sortBy,
        page
    });
    useEffect(() => {
        setPage(1);
    }, [genres, rating, sortBy]);

    const isInitialLoading = isLoading && !data;
    const hasResults = (data?.results?.length ?? 0) > 0;
    return (
        <>
            <Box>
                {isInitialLoading && <MovieCardSkeleton count={20}/>}
                {!isInitialLoading && isFetching && <MovieCardSkeleton count={20}/>}
                {hasResults && (
                    <Box
                        sx={resultsBlockSx}
                    >
                        {data!.results.map((movie) => (
                            <MovieCardComponent key={movie.id} movie={movie}/>
                        ))}
                    </Box>
                )}
            </Box>
            {(data?.total_pages ?? 0) > 1 && (
                <MoviePagination
                    totalPages={data!.total_pages}
                    page={page}
                    setPage={setPage}
                />
            )}
        </>

    );
};
