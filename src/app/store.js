import { configureStore } from "@reduxjs/toolkit";
import todoAppReducer from "../features/todo-app/todoAppSlice";
import homePageReducer from "../features/homePage/homePageSlice";

export default configureStore({
    reducer: {
        todoApp: todoAppReducer,
        homepage: homePageReducer
    },
  })
  