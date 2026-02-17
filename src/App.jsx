import React from "react";
import { Router, BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/globalStyles.js";
import Navbar from "./components/navbar/navbar.jsx";
import PageRoutes from "./routes/index.jsx";

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <GlobalStyles />
                <ToastContainer
                    className="toastifyContainer"
                    autoClose={3000}
                    closeOnClick={true}
                    pauseOnHover={true}
                    hideProgressBar={true}
                    position={"bottom-center"}
                    theme="light"
                />

                <Navbar />
                <PageRoutes />
            </BrowserRouter>
        </div>
    );
}
