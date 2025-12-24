
import {useGetFilteredMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {MovieCard} from "@/features/discoverMovies/ui/movieCard/MovieCard.tsx";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

type Props = {
    genres: number[];
    rating: [number, number];
    sortBy: string;
};

export const ResultsBlock = ({ genres, rating, sortBy }: Props) => {
    const { data, isLoading } = useGetFilteredMoviesQuery({
        genres,
        rating,
        sortBy,
    });


    if (isLoading) {
        return(
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    if (!data?.results?.length) return <div>Фильмов нет</div>;

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: 16 }}>
            {data.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
