import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router} from "react-router-dom";
import ProjectContextProvider from "./context/ProjectContext";
import SlideShowContextProvider from "./context/SlideShowContext";
import LayoutContextProvider from "./context/LayoutContext";

ReactDOM.render(
    <Router>
        <ProjectContextProvider>
            <SlideShowContextProvider>
                <LayoutContextProvider>
                    <App />
                </LayoutContextProvider>
            </SlideShowContextProvider>
        </ProjectContextProvider>
    </Router>, 
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();