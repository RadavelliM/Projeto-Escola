import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import NotFound404 from "../pages/404/404";
import Home from "../pages/home/home";
import PrivateRoute from "./privateRoute";

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" Component={Home} />

            <Route element={<PrivateRoute isClosed={true} />}>
                <Route path="/login" element={<Login />} />
            </Route>

            <Route path="*" Component={NotFound404} />
        </Routes>
    );
}
