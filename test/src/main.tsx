import {createRoot} from "react-dom/client"
import "./index.css"

// import {BrowserRouter} from "react-router"
import {Provider} from "react-redux"
import {store} from "@/app/store.ts"
import {App} from "@/app/App.tsx";
import {HashRouter} from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
)
