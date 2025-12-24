

import {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";

type Props = {
    movie: Movie;
    onFavoritesChange?: (updated: Movie[]) => void;
};

export const MovieCard = ({ movie,onFavoritesChange }: Props) => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    const FAVORITES_KEY = "favorites";

    useEffect(() => {
        const favorites: Movie[] = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
        const alreadyFavorite = favorites.some(f => f.id === movie.id);

        // Меняем состояние только если оно отличается от текущего
        setIsFavorite(prev => (prev !== alreadyFavorite ? alreadyFavorite : prev));
    }, [movie.id]);
    const handleClick = () => {
        navigate(`/movies/${movie.id}`);
    };

    const toggleFavorite = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        const favorites: Movie[] = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
        const updatedFavorites = isFavorite
            ? favorites.filter(f => f.id !== movie.id)
            : [...favorites, movie];

        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
        onFavoritesChange?.(updatedFavorites);
    }, [isFavorite, movie, onFavoritesChange]);
    const getRatingColor = (rating: number) => {
        if (rating >= 7) return "success";
        if (rating >= 4) return "warning";
        return "error";
    };

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/200x300?text=No+Image"; // заглушка

    return (
        <Card
            sx={{ width: 200, cursor: "pointer", position: "relative" }}
            onClick={handleClick}
        >
            <CardMedia
                component="img"
                height="300"
                image={posterUrl}
                alt={movie.title || movie.original_title}
            />
            <CardContent>
                <Typography variant="subtitle1" noWrap>
                    {movie.title || movie.original_title}
                </Typography>

                <Chip
                    label={movie.vote_average.toFixed(1)}
                    color={getRatingColor(movie.vote_average)}
                    size="small"
                    sx={{ mt: 1 }}
                />

                <Button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(e); }}
                    size="small"
                    sx={{ mt: 1 }}
                    variant={isFavorite ? "contained" : "outlined"}
                >
                    ❤️ Favorite
                </Button>
            </CardContent>
        </Card>
    );
};
