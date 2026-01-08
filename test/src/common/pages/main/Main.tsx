import {Container} from "@/common/components/Container";
import {PopularMovieBackground} from "@/common/pages/main/ welcomeSection/PopularMovieBackground.tsx";
import {MoviesSection} from "@/common/pages/main/movieSection/MovieSection.tsx";
import Box from "@mui/material/Box";


export const Main = () => {

    return (
        <div>
            <PopularMovieBackground/>
            <Container>

                <Box my={6}>
                    <MoviesSection
                        title="Popular Movies"
                        category="popular"
                    />
                </Box>

                <Box my={6}>
                    <MoviesSection
                        title="Top Rated Movies"
                        category="top_rated"
                    />
                </Box>

                <Box my={6}>
                    <MoviesSection
                        title="Upcoming Movies"
                        category="upcoming"
                    />
                </Box>

                <Box my={6}>
                    <MoviesSection
                        title="Now Playing Movies"
                        category="now_playing"
                    />
                </Box>

            </Container>


        </div>
    )
}
