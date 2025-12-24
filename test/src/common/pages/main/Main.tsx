
import {PopularMovieBackground} from "@/common/pages/main/PopularMovieBackground.tsx";
import {MoviesSection} from "@/common/pages/main/movieSection/MovieSection.tsx";


export const Main = () => {

    return (
        <div>
            <PopularMovieBackground/>

            <div style={{ padding: 24 }}>
                <MoviesSection
                    title="Popular Movies"
                    category="popular"
                />

                <MoviesSection
                    title="Top Rated Movies"
                    category="top_rated"
                />

                <MoviesSection
                    title="Upcoming Movies"
                    category="upcoming"
                />

                <MoviesSection
                    title="Now Playing Movies"
                    category="now_playing"
                />
            </div>
        </div>
    )
}
