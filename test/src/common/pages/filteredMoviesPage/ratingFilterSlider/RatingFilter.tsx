import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const RatingFilter = styled(Slider)(({ theme }) => {
    const isLight = theme.palette.mode === "light";

    const mainColor = isLight ? "#561be4" : "#128585"; // основной цвет

    return {
        color: mainColor, // цвет трека и ползунка
        height: 8,
        borderRadius: 4,
        padding: "15px 0",

        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: "#bab6b6", // цвет самого круга
            border: `2px solid ${mainColor}`,
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: `0 0 0 8px rgba(86, 27, 228, 0.16)`, // светящаяся область при hover
            },
        },

        '& .MuiSlider-rail': {
            opacity: 0.3,
            backgroundColor: isLight ? "#561be4" : "#128585",
        },

        '& .MuiSlider-track': {
            border: 'none',
        },
    };
});
