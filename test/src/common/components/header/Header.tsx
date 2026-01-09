import {NavLink} from "react-router"
import logo from "@/assets/logo.svg"
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {changeThemeModeAC, selectThemeMode} from "@/app/app-slice.ts";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {appBarSx, iconButtonSx, navCenterSx, toolbarSx} from "@/common/styles";
import {Container, NavButton} from "@/common/components";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()

    const changeMode = () => {
        dispatch(changeThemeModeAC({themeMode: themeMode === "light" ? "dark" : "light"}))
    }

    return (
        <AppBar position="fixed" sx={appBarSx} elevation={0}>
            <Toolbar sx={toolbarSx}>
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        {/* LEFT: Logo */}
                        <Box sx={{
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <NavLink to="/">
                                <img src={logo} alt="logo" style={{height: 30}}/>
                            </NavLink>
                        </Box>

                        {/* CENTER: Nav buttons  */}
                        <Box sx={navCenterSx}>
                            <NavButton to="/">Main</NavButton>
                            <Divider orientation="vertical" sx={{height: 25, mx: 1}}/>
                            <NavButton to="/categoryMovies">Category Movies</NavButton>
                            <Divider orientation="vertical" sx={{height: 25, mx: 1}}/>
                            <NavButton to="/filteredMovies">Filtered Movies</NavButton>
                            <Divider orientation="vertical" sx={{height: 25, mx: 1}}/>
                            <NavButton to="/search">Search</NavButton>
                            <Divider orientation="vertical" sx={{height: 25, mx: 1}}/>
                            <NavButton to="/favorites">Favorites</NavButton>
                        </Box>

                        {/* RIGHT: Nav buttons  */}
                        <Box sx={{
                            flexShrink: 0,
                            display: "flex",
                            justifyContent: "flex-end"
                        }}>
                            <IconButton onClick={changeMode} sx={iconButtonSx}>
                                {themeMode === "light"
                                    ? <DarkModeIcon sx={{fontSize: 28, color: "warning.main"}}/>
                                    : <LightModeIcon sx={{fontSize: 28, color: "warning.main"}}/>
                                }
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>


    )
}
