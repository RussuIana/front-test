import {useEffect, useState} from "react";
import {useGetMoviesQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import {WelcomeSection} from "@/common/pages/main/ welcomeSection/WelcomeSection.tsx";
import {SearchInput} from "@/common/pages/main/searchInput/SearchInput.tsx";
import {backgroundSx, contentSx, linearProgressSx, overlaySx, sectionSx} from "@/common/styles";

export const PopularMovieBackground = () => {

    const {data, isFetching} = useGetMoviesQuery({category: "popular"});
    const [randomBackdrop, setRandomBackdrop] = useState<string | null>(null);
    const showProgress = isFetching;

    useEffect(() => {
        if (!data?.results?.length) return;

        const moviesWithBackdrop = data.results.filter(movie => movie.backdrop_path);
        if (!moviesWithBackdrop.length) return;

        const random =
            moviesWithBackdrop[Math.floor(Math.random() * moviesWithBackdrop.length)];
        setRandomBackdrop(prev =>
            prev === random.backdrop_path ? prev : random.backdrop_path
        );
    }, [data]);

    return (
        <Box component="section" sx={(theme) => sectionSx(theme)}>
            <Box sx={backgroundSx(randomBackdrop)}/>
            <Box sx={overlaySx}/>
            <Box sx={contentSx}>
                <WelcomeSection/>
                <SearchInput/>
            </Box>
            {showProgress && (
                <LinearProgress sx={linearProgressSx}/>
            )}
        </Box>
    );
};
