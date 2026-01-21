import type {FilterCategory} from "@/features/discoverMovies/api/fullMovieData/types";
import {Movies} from "@/features/discoverMovies/ui/movieCategories/movies/Movies";
import {ViewMoreButton} from "@/common/pages/main/viewMoreButton/ViewMoreButton.tsx";
import {TitleSection} from "@/common/pages/main/titleSection/TitleSection.tsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

type Props = {
    title: string;
    category: FilterCategory;
};

export const MoviesSection = ({title, category}: Props) => {

    return (
        <Box width="100%">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <TitleSection>{title}</TitleSection>
                <ViewMoreButton to={`/categoryMovies?query=${category}`}>
                    View More
                </ViewMoreButton>
            </Box>
            <Grid container spacing={3}>
                <Movies category={category} page={1} limit={6}/>
            </Grid>
        </Box>
    );
};