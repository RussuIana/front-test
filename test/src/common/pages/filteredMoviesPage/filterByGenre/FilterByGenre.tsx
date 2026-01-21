
import {useGetGenresQuery} from "@/features/discoverMovies/api/moviesApi.ts";
import {FilterByGenreButton} from "@/common/pages/filteredMoviesPage/filterByGenre/FilterByGenreButton.tsx";

type Props = {
    value: number[];
    onChange: (value: number[]) => void;
};

export const FilterByGenre = ({ value, onChange }: Props) => {
    const { data, isLoading } = useGetGenresQuery();

    if (isLoading || !data) return null;

    const toggleGenre = (id: number) => {
        onChange(
            value.includes(id)
                ? value.filter(v => v !== id)
                : [...value, id]
        );
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {data.genres.map((genre) => (
                <FilterByGenreButton
                    key={genre.id}
                    className={value.includes(genre.id) ? "active" : ""}
                    onClick={() => toggleGenre(genre.id)}
                >
                    {genre.name}
                </FilterByGenreButton>
            ))}
        </div>
    );
};
