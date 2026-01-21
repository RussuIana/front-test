import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import type {SelectChangeEvent} from "@mui/material/Select";
import Select from "@mui/material/Select";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import {sortByFormSx} from "@/common/styles";

type SortDirection = "asc" | "desc";

type SortOption = {
    label: string;
    field: "popularity" | "vote_average" | "release_date" | "title";
    direction: SortDirection;
};

export type MovieSortOption = `${SortOption["field"]}.${SortDirection}`;

type Props = {
    value: MovieSortOption;
    onChange: (value: MovieSortOption) => void;
};
const MOVIE_SORT_OPTIONS: SortOption[] = [
    {label: "Popularity", field: "popularity", direction: "desc"},
    {label: "Popularity", field: "popularity", direction: "asc"},
    {label: "Rating", field: "vote_average", direction: "desc"},
    {label: "Rating", field: "vote_average", direction: "asc"},
    {label: "Release date", field: "release_date", direction: "desc"},
    {label: "Release date", field: "release_date", direction: "asc"},
    {label: "Title A-Z", field: "title", direction: "asc"},
    {label: "Title Z-A", field: "title", direction: "desc"},
];

export const SortByForm = ({value,onChange}:Props) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value as MovieSortOption)
    };

    return (
            <FormControl sx={{m: 1, width: 200,height:50 }}>
                <Select
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                    sx={sortByFormSx}
                >
                    {MOVIE_SORT_OPTIONS.map(option => {
                        const val: MovieSortOption = `${option.field}.${option.direction}`;
                        const showArrow = option.field !== "title";
                        return (
                            <MenuItem key={val} value={val}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {option.label}

                    {showArrow && (option.direction === "asc"
                        ? <ArrowUpwardIcon fontSize="small"/>
                        : <ArrowDownwardIcon fontSize="small"/>
                    )}
                </Box>
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>


    );
};


