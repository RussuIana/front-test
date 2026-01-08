import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import styles from "./MovieCard.module.css"
import Box from "@mui/material/Box";

type Props = {
    movie: Movie;
    onFavoritesChange?: (updated: Movie[]) => void;
};
const FAVORITES_KEY = "favorites";
export const MovieCard = ({movie, onFavoritesChange}: Props) => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);


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
        if (rating >= 5) return "warning";
        return "error";
    };

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/200x300?text=No+Image"; // заглушка

    return (
        <Card
            className={styles.movieCard}
            onClick={handleClick}
            elevation={0} // ❗ важно
            sx={{
                borderRadius: '20px',
                overflow: 'visible',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                '&:hover .favorite': {
                    opacity: 1, // кнопка «Фаворит» тоже появляется
                },

            }}
        >
            <Box className={styles.container}
                 sx={{
                     transition: "transform 0.3s, box-shadow 0.3s",
                     borderRadius: "inherit",
                     overflow: "hidden",
                     "&:hover": {
                         transform: "scale(1.05)", // только картинка растёт
                         boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                     },
                 }}
            >
                <CardMedia
                    component="img"
                    // height="350"
                    image={posterUrl}
                    alt={movie.title || movie.original_title}
                    sx={{
                        width: "100%",
                        aspectRatio: "2 / 3", // фиксированное соотношение
                        objectFit: "cover"
                    }}
                />
                <Chip
                    label={movie.vote_average.toFixed(1)}
                    color={getRatingColor(movie.vote_average)}
                    size="small"
                    className={styles.chip}
                />

                <Button
                    className="favorite"
                    onClick={toggleFavorite}
                    size="large"
                    variant={isFavorite ? "contained" : "outlined"}
                    sx={{
                        opacity: isFavorite ? 1 : 0,
                        boxShadow: 'none',
                        border: 'none',
                        minWidth: 30,
                        padding: '4px',
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        zIndex: 3,
                        color: '#fff',
                        backgroundColor: isFavorite ? '#BAB6B6FF' : 'rgba(0,0,0,0.7)',
                        transition: 'opacity 0.3s',
                        '&:hover': {
                            backgroundColor: isFavorite ? '#bab6b6' : 'rgba(0,0,0,0.9)',
                        }

                    }}

                >
                    ❤️
                </Button>
            </Box>

            <Typography variant="subtitle1" gutterBottom textAlign="center">
                {movie.title || movie.original_title}
            </Typography>
        </Card>
    );
};
