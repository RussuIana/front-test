import { NavLink } from "react-router"
import logo from "@/assets/logo.svg"
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()


    const changeMode = () => {
        dispatch(changeThemeModeAC({ themeMode: themeMode === "light" ? "dark" : "light" }))
    }



    return (
    <div style={{display: "flex" ,alignItems: "center", justifyContent: "space-around"}}>
        <div>
            <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="logo" style={{ height: "20px" }} />
            </NavLink>
        </div>
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/categoryMovies">Category Movies</NavLink>
            <NavLink to="/filteredMovies">Filtered Movies</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </div>
<div>
    <IconButton onClick={changeMode}
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid #BAB6B6FF",   // РАМКА ВОКРУГ ИКОНКИ
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        borderColor: "#087EA4", // СИНИЙ ПРИ НАВЕДЕНИИ
                    },
                }}>
        {themeMode === "light"
            ? <DarkModeIcon sx={{ fontSize: 28, color: "#FFC300"}}/>
            : <LightModeIcon sx={{ fontSize: 28, color: "#FFC300" }} />}
    </IconButton>
</div>



    </div>
  )
}
