import type {MovieDetail} from "@/features/discoverMovies/api/fullMovieData/schemas/movieDetail.types.ts";
import type {SimilarMoviesResponse} from "@/features/discoverMovies/api/fullMovieData/schemas/similarMovie.types.ts";
import type {CastMember} from "@/features/discoverMovies/api/fullMovieData/schemas/castMember.types.ts";

export type FullMovieData = {
    details: MovieDetail;
    casts: CastMember;
    similar: SimilarMoviesResponse;
};