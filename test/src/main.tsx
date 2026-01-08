import {createRoot} from "react-dom/client"
import "./index.css"

import {BrowserRouter} from "react-router"
import {Provider} from "react-redux"
import {store} from "@/app/store.ts"
import {App} from "@/app/App.tsx";
import {GlobalStyle} from "@/common/styles/globalStyle/GlobalStyle.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle/>
            <App/>
        </Provider>
    </BrowserRouter>,
)
