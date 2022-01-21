import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import ThemeContext from "./context/ThemeContext";

import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <DAppProvider config={{}}>
                <SimpleReactLightbox>
                    <BrowserRouter basename='/react/demo'>
                        <ThemeContext>
                            <App />
                        </ThemeContext>
                    </BrowserRouter>
                </SimpleReactLightbox>
            </DAppProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
