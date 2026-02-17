import React from "react";

import { Title } from "./styledLogin";
import { Container } from "../../styles/globalStyles";

export default function LoginTeste() {
    // é possivel enviar props para o styled component
    return (
        <Container>
            <Title isRed={true}>
                Login
                <p>outro texto</p>
            </Title>
        </Container>
    );
}
