import type { DomainMovies } from "@/features/discoverMovies/api/fullMovieData/schemas/moviesApi.schema.ts";
import type { FilterCategory } from "@/features/discoverMovies/lib/types";
import { useGetMoviesQuery } from "@/features/discoverMovies/api/moviesApi";
import { MoviePopularity } from "@/common/enums/enums";
import List from "@mui/material/List";

export type CategoryKey = "popular" | "top_rated" | "upcoming" | "now_playing";

type Props = {
    movieCategory: {
        filter: FilterCategory;      // "Popular movies" | "Top rated movies" | "Upcoming movies" | "Now playing movies"
        categoryKey: CategoryKey;     // ключ для запроса к API
    }
}

export const Movies = ({ movieCategory }: Props) => {
    const { filter, categoryKey } = movieCategory;

    // Запрос к API с правильной категорией
    const { data } = useGetMoviesQuery({ category: categoryKey }, { refetchOnFocus: true });

    // Массив фильмов из ответа API
    let filteredMovies: DomainMovies[] | undefined = data?.results;

    // Фильтрация по популярности/типу
    if (filter === "Popular movies") {
        filteredMovies = filteredMovies?.filter(movie => movie.genre_ids.includes(MoviePopularity.Popular));
    } else if (filter === "Top rated movies") {
        filteredMovies = filteredMovies?.filter(movie => movie.genre_ids.includes(MoviePopularity.TopRated));
    } else if (filter === "Upcoming movies") {
        filteredMovies = filteredMovies?.filter(movie => movie.genre_ids.includes(MoviePopularity.Upcoming));
    } else if (filter === "Now playing movies") {
        filteredMovies = filteredMovies?.filter(movie => movie.genre_ids.includes(MoviePopularity.NowPlaying));
    }

    return (
        <>
            {filteredMovies?.length === 0 ? (
                <p>Фильмов нет</p>
            ) : (
                <div>
                    <List>
                        {filteredMovies?.map(movie => (
                            <div key={movie.id} style={{ marginBottom: 8 }}>
                                {movie.title ?? movie.original_title}
                            </div>
                        ))}
                    </List>
                </div>
            )}
        </>
    )
}
