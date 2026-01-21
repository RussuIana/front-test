import {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type {Movie} from "@/features/discoverMovies/api/fullMovieData/schemas";
import {FavoriteButton, ImageContainer, MovieCard, RatingChip} from "@/common/components";


type Props = {
    movie: Movie;
    onFavoritesChange?: (updated: Movie[]) => void;
};

const FAVORITES_KEY = "favorites";

export const MovieCardComponent = ({movie, onFavoritesChange}: Props) => {

    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites: Movie[] = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
        const alreadyFavorite = favorites.some(f => f.id === movie.id);
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
        : "https://placehold.co/200x300?text=No+Image";

    return (
        <MovieCard
            onClick={handleClick}
            elevation={0}
        >
            <ImageContainer>
                <CardMedia
                    component="img"
                    image={posterUrl}
                    alt={movie.title || movie.original_title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <RatingChip
                    label={movie.vote_average.toFixed(1)}
                    color={getRatingColor(movie.vote_average)}
                    size="small"
                />
                <FavoriteButton
                    className="favorite"
                    isFavorite={isFavorite}
                    onClick={toggleFavorite}
                    size="large"
                    variant={isFavorite ? "contained" : "outlined"}
                >
                    ❤️
                </FavoriteButton>
            </ImageContainer>
            <Typography variant="subtitle1" gutterBottom textAlign="center">
                {movie.title || movie.original_title}
            </Typography>
        </MovieCard>
    );
};
