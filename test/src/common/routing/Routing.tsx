
import { Route, Routes } from "react-router"
import {Main} from "@/common/pages/Main.tsx";
import {CategoryMovies} from "@/common/pages/CategoryMovies.tsx";
import {FilteredMovies} from "@/common/pages/FilteredMovies.tsx";
import {Search} from "@/common/pages/Search.tsx";
import {Favorites} from "@/common/pages/Favorites.tsx";

export const Path = {
    Main: "/",
    CategoryMovies: "categoryMovies",
    FilteredMovies: "filteredMovies",
    Search: "search",
    Favorites: "favorites",
    // NotFound: "*",
} as const


export const Routing = () => (
    <Routes>
        <Route>
            <Route path={Path.Main} element={<Main />} />
        </Route>
        <Route>
            <Route path={Path.CategoryMovies} element={<CategoryMovies />} />
        </Route>
        <Route>
            <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
        </Route>
        <Route>
            <Route path={Path.Search} element={<Search />} />
        </Route>
        <Route>
            <Route path={Path.Favorites} element={<Favorites/>} />
        </Route>
    </Routes>
)
