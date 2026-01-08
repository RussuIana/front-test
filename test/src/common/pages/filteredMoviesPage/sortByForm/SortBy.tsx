import {type MovieSortOption, SortByForm} from "@/common/pages/filteredMoviesPage/sortByForm/SortByForm.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
type SortByProps = {
    value: MovieSortOption;
    onChange: (value: MovieSortOption) => void;
};
export const SortBy = ({value,onChange}:SortByProps) => {
    return (
        <Box sx={{display: "flex", justifyContent: "space-between",
            color: (theme) => theme.palette.mode === "light" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText}}>
            <Typography variant="h5">
                Sort<br/> by
            </Typography>

            <SortByForm value={value} onChange={onChange}/>
        </Box>
    );
};
