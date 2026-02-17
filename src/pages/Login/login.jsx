import React, { useEffect } from "react";

import { Title } from "./styledLogin";
import { Container } from "../../styles/globalStyles";
import axios from "../../services/axios";

export default function Login() {
    // funcoes assincronas nao podem ser criadas no estado
    useEffect(() => {
        async function getData() {
            const response = await axios.get("/aluno");
            console.log(response.data);
        }

        getData();
    }, []);

    return (
        <Container>
            <Title>Login</Title>
        </Container>
    );
}
