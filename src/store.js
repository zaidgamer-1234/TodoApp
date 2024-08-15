import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    todo: TodoReducer,
  },
});

export default store;
