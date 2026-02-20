import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav } from "./styledNavbar";
import { AiFillHome } from "react-icons/ai";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";

export default function Navbar() {
    const botaoClicado = useSelector((state) => state.exemplo.clicado);

    return (
        <Nav>
            <div className="brand">Escola</div>

            <div className="actions">
                <Link to="/">
                    <AiFillHome color="white" /> Home
                </Link>

                <Link to="/login">
                    <FaSignInAlt color="white" /> Logar
                </Link>

                <Link>
                    <FaUserAlt color="white" /> Perfil
                </Link>
                {botaoClicado ? "clicado" : "nao clicado"}
            </div>
        </Nav>
    );
}
