import React from "react";

import { Title } from "./styledLogin";
import { Container } from "../../styles/globalStyles";

export default function Login() {
    return (
        <Container>
            <Title isRed={true}>
                Login
                <p>outro texto</p>
            </Title>
        </Container>
    );
}
