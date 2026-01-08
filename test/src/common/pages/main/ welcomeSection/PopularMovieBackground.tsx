import {SearchInput} from "@/common/components";
import {useEffect, useState} from "react";
import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {MovieCardSkeleton} from "@/features/discoverMovies/ui/movieCardSkeleton/MovieCardSkeleton.tsx";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import {WelcomeSection} from "@/common/pages/main/ welcomeSection/WelcomeSection.tsx";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
export const PopularMovieBackground = () => {

    const {data, isLoading, isFetching} = useGetMoviesQuery({category: "popular"});

    const [randomBackdrop, setRandomBackdrop] = useState<string | null>(null);

    const showProgress = isLoading || isFetching;

    useEffect(() => {
        if (!data?.results?.length) return;

        const moviesWithBackdrop = data.results.filter(movie => movie.backdrop_path);
        if (!moviesWithBackdrop.length) return;

        const random =
            moviesWithBackdrop[Math.floor(Math.random() * moviesWithBackdrop.length)];

        setRandomBackdrop(random.backdrop_path);

    }, [data]);

    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                color: "#fff",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: randomBackdrop
                    ? `url(${TMDB_IMAGE_BASE}${randomBackdrop})`
                    : "linear-gradient(135deg, #1c1c1c, #000)",
                transition: "background-image 1s ease-in-out",
            }}
        >
            {showProgress && (
                <>
                    <LinearProgress sx={{position: "absolute", top: 0, width: "100%"}}/>
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                        <MovieCardSkeleton count={3}/>
                    </Box>
                </>
            )}

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                }}
            />

            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",   // сверху вниз
                    alignItems: "flex-start",  // по левому краю
                    padding: "150px",           // отступ от краёв
                    gap: "25px",               // расстояние между элементами
                    zIndex: 2,                 // чтобы контент был поверх overlay
                }}
            >
                <WelcomeSection />
                <SearchInput />
            </div>
        </section>
    );
};
