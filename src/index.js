import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootEl
)