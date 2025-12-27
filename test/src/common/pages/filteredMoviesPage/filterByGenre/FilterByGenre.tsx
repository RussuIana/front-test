import { Button } from "@mui/material";
import {useGetGenresQuery} from "@/features/discoverMovies/api/moviesApi.ts";

type Props = {
    value: number[];                // выбранные жанры (id)
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {data.genres.map((genre) => (
                <Button
                    key={genre.id}
                    variant={value.includes(genre.id) ? "contained" : "outlined"}
                    onClick={() => toggleGenre(genre.id)}
                >
                    {genre.name}
                </Button>
            ))}
        </div>
    );
};
