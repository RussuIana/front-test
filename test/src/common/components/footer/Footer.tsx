import {useAppSelector} from "@/common/hooks";
import {selectThemeMode} from "@/app/app-slice.ts";

export const Footer = () => {
    const themeMode = useAppSelector(selectThemeMode);

    return (
        <div style={{
            width: "100%",
            padding: "20px 0",
            textAlign: "center",
            color: themeMode === "light" ? "#000" : "#fff",
            backgroundColor: themeMode === "light" ? "#f6f5f5" : "#222",
            marginTop: "auto",
        }}>
            <h3>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</h3>
        </div>
    );
};
