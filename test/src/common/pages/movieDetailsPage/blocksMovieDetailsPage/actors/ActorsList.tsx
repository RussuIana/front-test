import {useParams} from "react-router";
import {useGetActorsListQuery} from "@/features/discoverMovies/api/movieDetailsApi.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {ActorsSkeleton} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/actors/ActorsSkeleton.tsx";
import {ActorCard} from "@/common/pages/movieDetailsPage/blocksMovieDetailsPage/actors/ActorsCard.tsx";
import type {CastMember} from "@/features/discoverMovies/api/fullMovieData/schemas";

export const ActorsList = () => {
    const { id } = useParams<{ id: string }>();
    const movieId  = Number(id);
    const { data } = useGetActorsListQuery(movieId, { skip: !movieId } );

    const hasActors = data?.cast && data.cast.length > 0;

    // Skeleton показываем только если данные ещё не пришли
    if (!data) return <ActorsSkeleton  />;

    if (!hasActors) return <Typography>No actors found</Typography>;


    return (
        <Box sx={{ mt: 2 }} >
            <Typography variant="h4" gutterBottom>Cast</Typography>

            <Box sx={{  display: "grid",
                gridTemplateColumns: { xs: "repeat(3, 1fr)", sm: "repeat(6, 1fr)" },
                gap: 2,
                mt: 2}}>
                {data.cast.slice(0, 6).map((actor: CastMember) => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
            </Box>


            );

            </Box>
    )}

