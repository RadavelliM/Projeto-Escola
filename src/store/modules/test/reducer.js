import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
    name: "exemplo",
    initialState: { clicado: false },
    reducers: {
        botaoClicado: (state) => {
            state.clicado = !state.clicado;
            console.log("Ação disparada!");
        },
    },
});

export default exampleSlice;
