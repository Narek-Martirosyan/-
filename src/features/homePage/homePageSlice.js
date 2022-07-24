import { createSlice } from "@reduxjs/toolkit";

export const homePageSlice = createSlice({
    name: 'homepage',
    initialState: {
        pathname: []
    },
    reducers: {
        changePathname: (state, action) => {
            state.pathname.push(action.payload);
        },
    }


})

export const { changePathname } = homePageSlice.actions;

export const followPathname = (state) => state.homepage.pathname;

export default homePageSlice.reducer;
