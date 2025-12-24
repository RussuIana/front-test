import { SearchInput } from "@/common/components";
import {useEffect,  useState} from "react";
import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
export const PopularMovieBackground = () => {

    const { data, isLoading } = useGetMoviesQuery({ category: "popular" });
    console.log(data);
    const [randomBackdrop, setRandomBackdrop] = useState<string | null>(null);



    useEffect(() => {
        if (!data?.results?.length) return;

        const moviesWithBackdrop = data.results.filter(movie => movie.backdrop_path);
        if (!moviesWithBackdrop.length) return;

        const random =
            moviesWithBackdrop[Math.floor(Math.random() * moviesWithBackdrop.length)];

        // if (random.backdrop_path !== randomBackdrop) {
            setRandomBackdrop(random.backdrop_path);
        // }
    }, [data]);
    if (isLoading) {
        return(
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    return (
        <section
            style={{
                position: "relative",
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 32,
                color: "#fff",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: randomBackdrop
                    ? `url(${TMDB_IMAGE_BASE}${randomBackdrop})`
                    : "linear-gradient(135deg, #1c1c1c, #000)",
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                }}
            />

            <div style={{ position: "relative", maxWidth: 600 }}>
                <h1>Welcome</h1>
                <h2>Browse highlighted titles from TMDB</h2>
                <SearchInput />
            </div>
        </section>
    );
};
