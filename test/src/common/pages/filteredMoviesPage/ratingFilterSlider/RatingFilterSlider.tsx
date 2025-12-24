import Slider from "@mui/material/Slider";


type Props = {
    value:  [number, number];
    onChange: (value: [number, number]) => void;
};

export const RatingFilterSlider  = ({value,onChange}: Props) => {


    return (
        <div style={{ width: 300 }}>
            <Slider
                value={value}
                onChange={(_, newValue) => onChange(newValue as[number, number])}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={0.1}
                getAriaLabel={() => "Rating range"}
            />
        </div>
    );


};

