import { Button } from "@mui/material";

type Props = {
    value: number[];                // выбранные жанры (id)
    onChange: (value: number[]) => void;
};

const GENRES = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Animation" },
    { id: 4, name: "Comedy" },
    { id: 5, name: "Crime" },
    { id: 6, name: "Documentary" },
    { id: 7, name: "Drama" },
    { id: 8, name: "Family" },
    { id: 9, name: "Fantasy" },
    { id: 10, name: "History" },
    { id: 11, name: "Horror" },
    { id: 12, name: "Music" },
    { id: 13, name: "Mystery" },
    { id: 14, name: "Romance" },
    { id: 15, name: "Science Fiction" },
    { id: 16, name: "TV Movie" },
    { id: 17, name: "Thriller" },
    { id: 18, name: "War" },
    { id: 19, name: "Western" },
];

export const FilterByGenre = ({ value, onChange }: Props) => {
    const toggleGenre = (id: number) => {
        if (value.includes(id)) {
            onChange(value.filter(v => v !== id)); // удалить жанр
        } else {
            onChange([...value, id]); // добавить жанр
        }
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {GENRES.map((genre) => (
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
