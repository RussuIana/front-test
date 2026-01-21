import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RatingFilter = styled(Slider)(({ theme }) => {
    const accent = theme.palette.info.main;

    return {
        color: accent, // цвет трека и ползунка
        height: 8,
        padding: "15px 0",

        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor:accent, // цвет самого круга
            boxShadow: "none",
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
            },
        },

        '& .MuiSlider-rail': {
            opacity: 0.3,
            backgroundColor: accent,
        },

        '& .MuiSlider-track': {
            border: 'none',
            backgroundColor: accent,
        },
    };
});
