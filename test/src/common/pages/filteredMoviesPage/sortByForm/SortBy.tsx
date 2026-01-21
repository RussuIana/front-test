import {type MovieSortOption, SortByForm} from "@/common/pages/filteredMoviesPage/sortByForm/SortByForm.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {sortBySx} from "@/common/styles";
type SortByProps = {
    value: MovieSortOption;
    onChange: (value: MovieSortOption) => void;
};
export const SortBy = ({value,onChange}:SortByProps) => {
    return (
        <Box sx={sortBySx}>
            <Typography variant="h5">
                Sort<br/> by
            </Typography>
            <SortByForm value={value} onChange={onChange}/>
        </Box>
    );
};
