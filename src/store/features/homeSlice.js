import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    generes: {}
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGeneres: (state, action) => {
            state.generes = action.payload;
        },
    }
});


export const { setApiConfiguration, getGeneres } = homeSlice.actions;
export default homeSlice.reducer;
