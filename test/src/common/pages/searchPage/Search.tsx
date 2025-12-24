
import { useSearchParams } from "react-router-dom";
import { useGetSearchMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import { MovieCard } from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import { SearchInput } from "@/common/components";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const { data, isLoading } = useGetSearchMoviesQuery({ query },
        { skip: !query }); // можно сделать отдельный endpoint search

    if (isLoading) {
        return(
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    return (
        <div>
            <h1>Search Results</h1>
            <SearchInput />
            {/* Состояния */}
            {!query && <p>Enter a movie title to start searching.</p>}
            {query && data?.results.length === 0 && <p>Results for "{query}" <br/> No matches found for "{query}"</p>}

            {/* Карточки фильмов */}
            {data?.results  && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: 16, marginTop: 16 }}>
                    {data?.results.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};
