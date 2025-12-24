import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import type { FilterCategory } from "@/features/discoverMovies/api/fullMovieData/types";
import { Movies } from "@/features/discoverMovies/ui/movieCategories/movies/Movies";

type Props = {
    title: string;
    category: FilterCategory;
};

export const MoviesSection = ({ title, category }: Props) => {
    const navigate = useNavigate();

    return (
        <section style={{ marginBottom: 48 }}>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>
<div style={{ display: "flex" , justifyContent: "space-between" }}>

    <Movies category={category} />

    <Stack mt={2}>
    <Button
        variant="contained"
        onClick={() =>
            navigate(`/categoryMovies?query=${category}`)
        }
    >
        View More
    </Button>
    </Stack>
</div>

        </section>
    );
};