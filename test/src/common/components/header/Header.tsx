import {NavLink} from "react-router"
import logo from "@/assets/logo.svg"
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {iconButtonSx, navCenterSx, toolbarSx} from "@/common/styles";
import {NavButton} from "@/common/components";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";


export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()


    const changeMode = () => {
        dispatch(changeThemeModeAC({themeMode: themeMode === "light" ? "dark" : "light"}))
    }

    return (
        <AppBar position="sticky" sx={{mb: "30px"}}>
            <Toolbar sx={toolbarSx}>
                <Box sx={{width: 120, display: "flex"}}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" style={{height: "30px"}}/>
                    </NavLink>
                </Box>

                <Box sx={navCenterSx}>
                    <NavButton to="/" activeTheme={themeMode}>Main</NavButton>
                    <Divider orientation="vertical"  sx={{height: "20px", mx: 1, width: "1px"}}/>
                    <NavButton to="/categoryMovies" activeTheme={themeMode}>Category Movies</NavButton>
                    <Divider orientation="vertical"  sx={{height: "20px", mx: 1, width: "1px"}}/>
                    <NavButton to="/filteredMovies" activeTheme={themeMode}>Filtered Movies</NavButton>
                    <Divider orientation="vertical"  sx={{height: "20px", mx: 1, width: "1px"}}/>
                    <NavButton to="/search" activeTheme={themeMode}>Search</NavButton>
                    <Divider orientation="vertical" sx={{height: "20px", mx: 1, width: "1px"}}/>
                    <NavButton to="/favorites" activeTheme={themeMode}>Favorites</NavButton>
                </Box>

                <Box sx={{width: 120, display: "flex", justifyContent: "flex-end"}}>
                    <IconButton onClick={changeMode}
                                sx={iconButtonSx}>
                        {themeMode === "light"
                            ? <DarkModeIcon sx={{fontSize: 28, color: "#FFC300"}}/>
                            : <LightModeIcon sx={{fontSize: 28, color: "#FFC300"}}/>}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
