import { Route, Routes } from "react-router"
import { CategoryMovies, Favorites, FilteredMovies, Main, Search } from "../pages"
import {MovieDetailsPage} from "@/common/pages/movieDetailsPage/MovieDetailsPage.tsx";
import {PageNotFound} from "@/common/components";


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
      <Route path={Path.Main} element={<Main />} />
      <Route path={Path.CategoryMovies} element={<CategoryMovies />} />
      <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
      <Route path={Path.Search} element={<Search />} />
      <Route path={Path.Favorites} element={<Favorites />} />
      <Route path={Path.MovieDetailsPage} element={<MovieDetailsPage />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)
