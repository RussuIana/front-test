import {RatingFilterSlider } from "@/common/pages/filteredMoviesPage/ratingFilterSlider/RatingFilterSlider.tsx";

type Props = {
    value: [number, number];
    onChange: (value: [number, number]) => void;
};
export const FilterByRating = ({value, onChange}:Props) => {

    return (

        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Rating</h2>
                <h2>{value[0].toFixed(1)} – {value[1].toFixed(1)}</h2>

            </div>
            <RatingFilterSlider value={value} onChange={onChange} />

        </div>
    );
};
