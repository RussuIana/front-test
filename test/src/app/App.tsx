import "./App.css"
import {Routing} from "@/common/routing"
import {Footer, Header} from "@/common/components"
import {useAppSelector} from "@/common/hooks";
import {selectThemeMode} from "@/app/app-slice.ts";
import {getTheme} from "@/common/theme/theme.ts";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


export const App = () => {

    const themeMode = useAppSelector(selectThemeMode)


    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <Header/>
                <Routing/>
                <Footer/>

            </div>
        </ThemeProvider>
    )
}

