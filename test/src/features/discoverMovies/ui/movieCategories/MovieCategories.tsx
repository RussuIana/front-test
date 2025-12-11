import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/discoverMovies/api/movieCategoriesApi";
import type {DomainMovie} from "@/features/discoverMovies/lib/types";

export const MovieCategories = () => {
    const { data: popular } = useGetPopularMoviesQuery();
    const { data: topRated } = useGetTopRatedMoviesQuery();
    const { data: upcoming} = useGetUpcomingMoviesQuery();
    const { data: nowPlaying} = useGetNowPlayingMoviesQuery();

    const navigate = useNavigate()

    const sections = [
        { title: "Popular Movies", data: popular ,link:"popular" },
        { title: "Top Rated Movies", data: topRated ,link: "top_rated" },
        { title: "Upcoming Movies", data: upcoming, link: "upcoming"  },
        { title: "Now Playing Movies", data: nowPlaying,link: "now_playing"  },
    ];

    return (
                <div>
                    {sections.map(section => (
                        <section key={section.title}>
                            <h2>{section.title}</h2>
                            {(section.data ?? []).map((movie: DomainMovie) => (
                                <div key={movie.id}>
                                    {movie.title ?? movie.original_title}
                                </div>
                            ))}

                            {/* Button "View more" */}

                            <Button
                                variant="contained"
                                style={{ marginTop: "10px" }}
                                onClick={() => navigate(`/categoryMovies?query=${section.link}`)}
                            >
                                View more
                            </Button>
                        </section>
                    ))}
                        </div>
    );
}












