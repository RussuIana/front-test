import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type {CastMember} from "@/features/discoverMovies/api/fullMovieData/schemas";

export const ActorCard = ({ actor }: { actor: CastMember  }) => (
    <Box sx={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 1, // небольшие отступы между аватаркой и текстом
        alignItems: "center",
    }}>
        <img
            src={
                actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : "https://placehold.co/100x100?text=No+Image"
            }
            alt={actor.name}
            style={{ width: "100%", aspectRatio: "1 / 1",
                borderRadius: "50%",
                objectFit: "cover" }}
        />
        <Typography variant="body2" noWrap title={actor.name}>
            {actor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap title={actor.character}>
            {actor.character}
        </Typography>
    </Box>
);