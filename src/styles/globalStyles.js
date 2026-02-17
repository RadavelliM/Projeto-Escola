import styled, { createGlobalStyle } from "styled-components";
import { tertiary, toastifyError, toastifySucces } from "../config/colors";

import "react-toastify/ReactToastify.css";

export default createGlobalStyle`
    * {
        margin: 0%;
        padding: 0%;
        outline: none;
        box-sizing: border-box;
    }


    html, body, :root {
        height: 100%;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background-color: ${toastifySucces};
        color: white;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--loading {
        background-color: ${toastifyError};
    }

    button {
        cursor: pointer;
    }

    body {
        background-color: ${tertiary};
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export const Container = styled.main`
    max-width: 70vw;
    margin: 30px auto;
`;
