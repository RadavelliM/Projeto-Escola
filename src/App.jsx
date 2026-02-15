import React from "react";

import GlobalStyles from "./styles/globalStyles.js";
import Login from "./pages/Login/login";
import Navbar from "./components/common/navbar/navbar.jsx";

export default function App() {
    return (
        <div className="container">
            <h1>
                <GlobalStyles />
                <Navbar />
                <Login />
            </h1>
        </div>
    );
}
