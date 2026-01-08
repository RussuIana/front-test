import {useSearchParams} from "react-router-dom";
import {useGetSearchMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import {Container, SearchInput} from "@/common/components";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";
import {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const [page, setPage] = useState(1);

    const {data, isLoading} = useGetSearchMoviesQuery({query, page},
        {skip: !query});

    const isLoaded = query && !isLoading && data;
    const hasResults = isLoaded && data.results.length > 0;
    const hasNoResults = isLoaded && data.results.length === 0;


    // Сбрасываем страницу на 1 при изменении запроса
    useEffect(() => {
        setPage(1);
    }, [query]);

    return (
        <div style={{paddingTop: "40px"}}>

            <Container>

                <Stack spacing={4}>
                    <Typography variant="h3" >Search Results </Typography>
                    <SearchInput/>
                    {/* Состояния */}
                    {!query && <Typography variant="h6" > Enter a movie title to start searching.</Typography>}

                    {query && isLoading && <MovieCardSkeleton count={5}/>}

                    {hasNoResults && (
                        <>
                            <Typography variant="h4" >
                                Results for "{query}"
                            </Typography>

                            <Typography  variant="h6" sx={theme => ({ color: theme.palette.primary.contrastText })}>
                                No matches found for "{query}"
                            </Typography>
                        </>



                    )}

                    {hasResults && (
                        <>
                            <p>Results for "{query}"</p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: 16,
                                }}
                            >
                                {data.results.map(movie => (
                                    <MovieCard key={movie.id} movie={movie}/>
                                ))}
                            </div>
                        </>
                    )}
                    {(data?.total_pages ?? 0) > 1 && (
                        <MoviePagination
                            totalPages={data?.total_pages ?? 1}  // сюда нужно передать реальное количество страниц из API
                            page={page}
                            setPage={setPage}
                        />
                    )}


                </Stack>


            </Container>
        </div>

    );
};
