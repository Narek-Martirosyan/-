import { configureStore } from "@reduxjs/toolkit";
import todoAppReducer from "../features/todo-app/todoAppSlice";
import followPathnameReducer from "../features/followPathname/followPathnameSlice";

export default configureStore({
    reducer: {
        todoApp: todoAppReducer,
        followPathname: followPathnameReducer
    },
  })
  