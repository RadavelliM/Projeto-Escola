import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import NotFound404 from "../pages/404/404";
import Home from "../pages/home/home";

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="*" Component={NotFound404} />
        </Routes>
    );
}
