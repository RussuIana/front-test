import {RatingFilterSlider } from "@/common/pages/filteredMoviesPage/ratingFilterSlider/RatingFilterSlider.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    value: [number, number];
    onChange: (value: [number, number]) => void;
};
export const FilterByRating = ({value, onChange}:Props) => {

    return (

        <div>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                color: (theme) => theme.palette.mode === "light" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
            }}>
                <Typography variant="h5">Rating</Typography>
                <Typography variant="h6">
                    {value[0].toFixed(1)} – {value[1].toFixed(1)}
                </Typography>

            </Box>
            <RatingFilterSlider value={value} onChange={onChange} />

        </div>
    );
};
