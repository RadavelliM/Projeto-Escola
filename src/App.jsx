import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/globalStyles.js";
import Navbar from "./components/navbar/navbar.jsx";
import PageRoutes from "./routes/index.jsx";

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <GlobalStyles />
                <Navbar />
                <PageRoutes />
            </BrowserRouter>
        </div>
    );
}
