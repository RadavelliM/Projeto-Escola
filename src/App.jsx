import React from "react";
import Login from "./pages/Login/login";
import GlobalStyles from "./styles/globalStyles.js";

export default function App() {
    return (
        <div className="container">
            <h1>
                <GlobalStyles />
                <Login />
            </h1>
        </div>
    );
}
