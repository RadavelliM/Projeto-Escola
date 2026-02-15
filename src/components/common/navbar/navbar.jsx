import React from "react";

import { Nav } from "./styledNavbar";
import { AiFillHome } from "react-icons/ai";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";

export default function Navbar() {
    return (
        <Nav>
            <div className="brand">Escola</div>

            <div className="actions">
                <AiFillHome color="white" /> Home
                <FaSignInAlt color="white" /> Logar
                <FaUserAlt color="white" /> Perfil
            </div>
        </Nav>
    );
}
