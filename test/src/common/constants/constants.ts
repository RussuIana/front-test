import type {MovieSortOption} from "@/common/pages/filteredMoviesPage/sortByForm/SortByForm.tsx";

export const AUTH_TOKEN = "auth-token"
export const BASE_URL = import.meta.env.VITE_BASE_URL
export const API_KEY = import.meta.env.VITE_API_KEY

export const PAGE_SIZE =4

export const INITIAL_SORT: MovieSortOption  = "popularity.desc";
export const INITIAL_GENRES: number[] = [];
export const INITIAL_RATING: [number, number] = [0, 10] ;