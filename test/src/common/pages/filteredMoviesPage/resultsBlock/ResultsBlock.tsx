
import {useGetFilteredMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import Box from "@mui/material/Box";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";
import {useEffect, useState} from "react";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";

type Props = {
    genres: number[];
    rating: [number, number];
    sortBy: string;
};

export const ResultsBlock = ({ genres, rating, sortBy }: Props) => {
    const [page, setPage] = useState(1)

    const { data, isLoading,isFetching } = useGetFilteredMoviesQuery({
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
                {/* Loading inițial → Skeleton */}
                {isInitialLoading && <MovieCardSkeleton count={20} />}


                {/* Скелетон при смене страницы / фильтров */}
                {!isInitialLoading && isFetching && <MovieCardSkeleton count={20} />}

                {/* Lista de filme */}
                {hasResults && (
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, 200px)",
                            gap: 2,
                        }}
                    >
                        {data!.results.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </Box>
                )}
            </Box>
            {(data?.total_pages ?? 0) > 1 && (
                <MoviePagination
                    totalCount={data!.total_pages}
                    page={page}
                    setPage={setPage}
                />
            )}
        </>

    );
};
