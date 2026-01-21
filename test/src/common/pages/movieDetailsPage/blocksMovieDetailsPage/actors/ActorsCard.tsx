import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type {CastMember} from "@/features/discoverMovies/api/fullMovieData/schemas";
import {actorAvatarSx} from "@/common/styles";

export const ActorCard = ({ actor }: { actor: CastMember  }) => {
   return (
<Box sx={{
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
}}>
    <Box component="img"
        src={
            actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : "https://placehold.co/100x100?text=No+Image"
        }
        alt={actor.name}
        sx={actorAvatarSx}
    />
    <Typography variant="h5" color="text.primary" noWrap title={actor.name}>
        {actor.name}
    </Typography>
    <Typography variant="h6" color="text.secondary" noWrap title={actor.character}>
        {actor.character}
    </Typography>
</Box>
   )
};