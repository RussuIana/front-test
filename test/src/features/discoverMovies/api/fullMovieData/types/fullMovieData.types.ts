import type {MovieDetail} from "@/features/discoverMovies/api/fullMovieData/schemas/movieDetail.schema.ts";
import type {SimilarMoviesResponse} from "@/features/discoverMovies/api/fullMovieData/schemas/similarMovie.schema.ts";
import type {CastMember} from "@/features/discoverMovies/api/fullMovieData/schemas/castMember.schema.ts";

export type FullMovieDataTypes = {
    details: MovieDetail;
    casts: CastMember[];
    similar: SimilarMoviesResponse;
};