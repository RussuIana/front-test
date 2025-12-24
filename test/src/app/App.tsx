import "./App.css"
import {Routing} from "@/common/routing"
import {Footer, Header} from "@/common/components"
import {useAppSelector} from "@/common/hooks";
import {selectThemeMode} from "@/app/app-slice.ts";
import {getTheme} from "@/common/theme/theme.ts";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {ErrorSnackbar} from "@/common/components/errorSnackbar/ErrorSnackbar.tsx";


export const App = () => {

    const themeMode = useAppSelector(selectThemeMode)


    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header/>
                <Toolbar/>
                <Box component="main" flexGrow={1} px={2}>
                    <Routing />
                </Box>
                <ErrorSnackbar/>
                <Footer/>

            </Box>
        </ThemeProvider>
    )
}

