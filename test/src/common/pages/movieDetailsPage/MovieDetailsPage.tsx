import {MovieInfo} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/MovieInfo.tsx";
import {ActorsList} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/actors/ActorsList.tsx";
import {SimilarMovies} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/SimilarMovies.tsx";
import Box from "@mui/material/Box";
import { Container } from "@/common/components/Container";

export const MovieDetailsPage = () => {

    return (
        <Container>
            <Box sx={{ p: 3 }}>
                <MovieInfo/>
                <ActorsList/>
                <SimilarMovies/>
            </Box>
        </Container>

    );
};

