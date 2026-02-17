import styled from "styled-components";

export const Title = styled.h1`
    // a props é recebida entre $ {} (da mesma maneira para usar js dentro de jsx)
    // pode se fazer uma verificacao, se for true, vermelho, else azul
    /* background-color: ; */
    background-color: ${(props) => (props.isRed ? "red" : "blue")};

    // pode se colocar outras tags dentro dela
    /* p {
        color: #4c00ff;
    } */
`;
