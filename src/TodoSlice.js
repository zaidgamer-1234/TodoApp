import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const existingTodo = state.find((todo) => todo.text === action.payload);
      if (!existingTodo) {
        const todo = { id: nanoid(), text: action.payload };
        state.push(todo);
      } else {
        toast.error(" already added");
      }
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: {
      prepare(id, text) {
        return { payload: { id, text } };
      },

      reducer(state, action) {
        const todo = state.find((todo) => todo.id === action.payload.id);
        if (todo && action.payload.text) {
          todo.text = action.payload.text;
        } else toast.error("Provide a new todo");
      },
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
