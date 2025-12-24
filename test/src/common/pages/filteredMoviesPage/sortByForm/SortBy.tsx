import {type MovieSortOption, SortByForm} from "@/common/pages/filteredMoviesPage/sortByForm/SortByForm.tsx";
type SortByProps = {
    value: MovieSortOption;
    onChange: (value: MovieSortOption) => void;
};
export const SortBy = ({value,onChange}:SortByProps) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h2>Sort<br/> by</h2>
            <SortByForm value={value} onChange={onChange}/>
        </div>
    );
};
