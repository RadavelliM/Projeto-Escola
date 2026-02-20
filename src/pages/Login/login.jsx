import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "../../services/axios";

import { Title } from "./styledLogin";
import { Container } from "../../styles/globalStyles";

import { clica } from "../../store/modules/test/actions";

export default function Login() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(clica());
    }

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
            <button onClick={handleClick}>Enviar</button>
        </Container>
    );
}
