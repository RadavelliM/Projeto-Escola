import React from "react";
import { Route, Navigate, useLocation, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ Element, isClosed }) {
    const locationu = useLocation();

    const isLoggedIn = true;

    if (isClosed && !isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{ prevPath: locationu.pathname }}
                replace
            />
        );
    }

    return Element ? Element : <Outlet />;
}

PrivateRoute.defaultProps = {
    isClosed: false,
};

PrivateRoute.propTypes = {
    Element: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isClosed: PropTypes.bool,
};
