import { createSlice } from "@reduxjs/toolkit";

export const followPathnameSlice = createSlice({
    name: 'followPathname',
    initialState: {
        mainPathname: [],
        contactPathname: [],
        portfolioPathname: [],
        articlesPathname: []
    },
    reducers: {
        changeMainPathname: (state, action) => {
            state.mainPathname.push(action.payload);
        },
        changeContactPathname: (state, action) => {
            state.contactPathname.push(action.payload);
        },
        changePortfolioPathname: (state, action) => {
            state.portfolioPathname.push(action.payload);
        },
        changeArticlesPathname: (state, action) => {
            state.articlesPathname.push(action.payload);
        }
    }


})

export const {
    changeMainPathname,
    changeContactPathname,
    changePortfolioPathname,
    changeArticlesPathname
} = followPathnameSlice.actions;

export const followMainPathname = (state) => state.followPathname.mainPathname;
export const followContactPathname = (state) => state.followPathname.contactPathname;
export const followPortfolioPathname = (state) => state.followPathname.portfolioPathname;
export const followArticlesPathname = (state) => state.followPathname.articlesPathname;

export default followPathnameSlice.reducer;
