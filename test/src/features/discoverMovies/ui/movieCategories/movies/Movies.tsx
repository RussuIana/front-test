import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi";
import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import {MovieCardComponent} from "@/features/discoverMovies/ui/movieCardComponent/MovieCardComponent.tsx";
import Box from "@mui/material/Box";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";
import {moviesSx} from "@/common/styles";

type Props = {
    category: FilterCategory;
    page?: number;
    limit?: number;
};

export const Movies = ({ category, page = 1, limit = 6 }: Props) => {
    const { data, isLoading, isFetching } = useGetMoviesQuery({ category, page }, { refetchOnFocus: true });

    const movies: Movie[] = data?.results || [];
    const showSkeleton = isLoading || isFetching;
    const visibleMovies = movies.slice(0, limit);
    const skeletonArray = Array.from({ length: limit ?? 6 });

    return (
        <Box
            sx={moviesSx(limit)}
        >
            {showSkeleton
                ? skeletonArray.map((_, i) => (
                    <Box key={i}> <MovieCardSkeleton /> </Box> ))
                : visibleMovies.map((movie) =>(
                    <MovieCardComponent key={movie.id} movie={movie} />))
            }
        </Box>
    );
};

