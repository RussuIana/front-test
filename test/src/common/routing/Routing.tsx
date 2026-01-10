import { Route, Routes } from "react-router"
import { CategoryMovies, Favorites, FilteredMovies, Main, Search } from "../pages"
import {MovieDetailsPage} from "@/common/pages/movieDetailsPage/MovieDetailsPage.tsx";
import {PageNotFound} from "@/common/components/pageNotFound/PageNotFound.tsx";

export const Path = {
  Main: "/",
  CategoryMovies: "categoryMovies",
  FilteredMovies: "filteredMovies",
  Search: "search",
  Favorites: "favorites",
    MovieDetailsPage:"/movies/:id",
  NotFound: "*",
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
      <Route path={Path.Favorites} element={<Favorites />} />
    </Route>
      <Route>
      <Route path={Path.MovieDetailsPage} element={<MovieDetailsPage />} />
    </Route>
      <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)
