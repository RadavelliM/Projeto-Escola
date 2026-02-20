import React from "react";
import { BrowserRouter } from "react-router-dom"; // Use apenas BrowserRouter
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import store from "./store/redux.js";
import GlobalStyles from "./styles/globalStyles.js";
import PageRoutes from "./routes/index.jsx";
import Navbar from "./components/navbar/navbar.jsx";

export default function App() {
    return (
        <div className="container">
            <Provider store={store}>
                <BrowserRouter>
                    <GlobalStyles />
                    <ToastContainer
                        className="toastifyContainer"
                        autoClose={3000}
                        closeOnClick
                        pauseOnHover
                        hideProgressBar
                        position="bottom-center"
                        theme="light"
                    />

                    <Navbar />
                    <PageRoutes />
                </BrowserRouter>
            </Provider>
        </div>
    );
}
