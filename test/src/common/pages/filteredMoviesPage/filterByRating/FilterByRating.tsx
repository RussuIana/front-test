import {RatingFilterSlider } from "@/common/pages/filteredMoviesPage/ratingFilterSlider/RatingFilterSlider.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {filterByRatingSx} from "@/common/styles";

type Props = {
    value: [number, number];
    onChange: (value: [number, number]) => void;
};
export const FilterByRating = ({value, onChange}:Props) => {

    return (

        <div>
            <Box sx={filterByRatingSx}>
                <Typography variant="h6">Rating</Typography>
                <Typography component="h6"
                            sx={{ fontSize: 16 }}>
                    {value[0].toFixed(1)} – {value[1].toFixed(1)}
                </Typography>
            </Box>
            <RatingFilterSlider value={value} onChange={onChange} />
        </div>
    );
};
