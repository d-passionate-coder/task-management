import { createSlice } from "@reduxjs/toolkit";
import getTasks from "../actions/tasks";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    updateTasks: (state, action) => {
      let found = false;
      const updatedTasks = state.tasks.map((task) => {
        if (task._id === action.payload._id) {
          found = true;
          return action.payload;
        }
        return task;
      });
      if (found) state.tasks = updatedTasks;
      else {
        updatedTasks.push(action.payload);
        state.tasks = updatedTasks;
      }
    },
    deleteTask: (state, action) => {
      const updatedTasks = state.tasks.filter(
        (task) => task._id != action.payload
      );
      state.tasks = updatedTasks;
    },
    updateAll: (state, action) => {
      console.log("taskdata", action.payload);
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        (state.loading = false), (state.tasks = action.payload);
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateTasks, deleteTask, updateAll } = taskSlice.actions;
export default taskSlice.reducer;
