import {MovieInfo} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/MovieInfo.tsx";
import {BackButton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/BackButton.tsx";
import {ActorsList} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/ActorsList.tsx";
import {SimilarMovies} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/SimilarMovies.tsx";
import Box from "@mui/material/Box";

export const MovieDetailsPage = () => {

    return (
        <Box sx={{ p: 3 }}>
            <MovieInfo/>
            <BackButton/>
            <ActorsList/>
            <SimilarMovies/>
        </Box>
    );
};

