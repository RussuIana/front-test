import {MovieCategories} from "@/features/discoverMovies/ui/movieCategories/MovieCategories.tsx";
import {SearchInput} from "@/common/components";


export const Main = () => {
    return (
        <div>
            <div>
                <h1>Welcome </h1>
                <h2>Browse highlighted titles from TMDB</h2>
                <SearchInput/>
            </div>
            <MovieCategories/>
        </div>
    )
}
