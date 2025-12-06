import {MovieCategories} from "@/features/discoverMovies/ui/movieCategories/MovieCategories.tsx";

export const Main = () => {
    return (
        <div>
            <h1>Welcome <br/>
                Browse highlighted titles from TMDB</h1>
            <input type="text"/> <button>search</button>
            <MovieCategories/>
        </div>
    )
}
