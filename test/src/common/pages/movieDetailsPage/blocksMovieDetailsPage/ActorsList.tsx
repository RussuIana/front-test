import {useParams} from "react-router";
import {useGetActorsListQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const ActorsList = () => {
    const { id } = useParams<{ id: string }>();
    const movieId  = Number(id);
    const { data,isLoading } = useGetActorsListQuery(movieId );
    if (isLoading) {
        return(
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    if (!data || !data.cast || data.cast.length === 0) return <Typography>No actors found</Typography>;

    return (
        <Box  >
            <Typography variant="h4" gutterBottom>Cast</Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {data.cast.slice(0, 6).map(actor => (
                    <Box key={actor.id} sx={{ width: 100 }}>
                <img
                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "https://placehold.co/100x100?text=No+Image"}
                    alt={actor.name}
                    style={{ width: 100 }}
                />

                <Typography variant="body2">{actor.name} </Typography>

                <Typography variant="body2">{actor.character}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )}

