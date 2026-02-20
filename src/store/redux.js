import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./modules/test/reducer";

const store = configureStore({
    reducer: {
        exemplo: exampleSlice.reducer,
    },
});

export const { botaoClicado } = exampleSlice.actions;
export default store;
