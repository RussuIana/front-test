import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/discoverMovies/api/movieCategoriesApi.ts";

export const MovieCategories =()=>{
    const {data:popular} = useGetPopularMoviesQuery()
    const {data: topRated} = useGetTopRatedMoviesQuery()
    const {data: upcoming} = useGetUpcomingMoviesQuery()
    const {data: nowPlaying} = useGetNowPlayingMoviesQuery()
    const sections = [
        { title: "Popular Movies", data: popular },
        { title: "Top Rated Movies", data: topRated},
        { title: "Upcoming Movies", data: upcoming },
        { title: "Now Playing Movies", data: nowPlaying },
    ];

    return (
        <>
            {sections.map(section => (
                <section key={section.title}>
                    <h2>{section.title}</h2>
                    {section.data?.map(movie => (
                        <div key={movie.id}>{movie.title}</div>
                    ))}
                </section>
            ))}
        </>
    )
}








