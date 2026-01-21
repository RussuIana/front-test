import {useSearchParams} from "react-router-dom";
import {useGetSearchMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {MovieCardComponent} from "@/features/discoverMovies/ui/movieCardComponent/MovieCardComponent.tsx";
import {Container,} from "@/common/components";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";
import {MoviePagination} from "@/features/discoverMovies/ui/moviePagination/MoviePagination.tsx";
import {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {SearchInput} from "@/common/pages/main/searchInput/SearchInput.tsx";
import Box from "@mui/material/Box";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);

    const rawQuery = searchParams.get("query") ?? "";
    const query = rawQuery.trim();
    const {data, isLoading} = useGetSearchMoviesQuery({query, page}, {skip: !query});

    const results = query ? data?.results ?? [] : [];
    const totalPages = query ? data?.total_pages ?? 0 : 0;

    const hasQuery = query.length > 0;
    const hasResults = results.length > 0;
    const hasNoResults = query && !isLoading && results.length === 0;

    useEffect(() => {
        setPage(1);
    }, [query]);

    return (
        <Container>
            <Box sx={{paddingTop: "40px"}}>
                <Stack spacing={4}>
                    <Typography variant="h3" color="text.primary">Search Results </Typography>
                    <SearchInput/>
                    {!hasQuery && <Typography variant="h6" color="text.secondary"> Enter a movie title to start
                        searching.</Typography>}
                    {hasQuery && isLoading && <MovieCardSkeleton count={5}/>}
                    {hasNoResults && (
                        <>
                            <Typography variant="h4" color="text.primary">
                                Results for "{query}"
                            </Typography>

                            <Typography variant="h6" color="text.secondary">
                                No matches found for "{query}"
                            </Typography>
                        </>
                    )}
                    {hasResults && (
                        <>
                            <Typography variant="h4">Results for "{query}"</Typography>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    gap: 16,
                                }}
                            >
                                {results.map(movie => (
                                    <MovieCardComponent key={movie.id} movie={movie}/>
                                ))}
                            </Box>
                        </>
                    )}
                    {hasQuery && totalPages > 1 && (
                        <MoviePagination
                            totalPages={totalPages}
                            page={page}
                            setPage={setPage}
                        />
                    )}
                </Stack>
            </Box>
        </Container>
    );
};
