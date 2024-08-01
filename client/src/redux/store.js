import { configureStore } from "@reduxjs/toolkit";
import newTaskSlice from "./features/newTaskSlice";
import authSlice from "./features/authSlice";
import taskSlice from "./features/taskSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    newTask: newTaskSlice,
    task: taskSlice,
  },
});
