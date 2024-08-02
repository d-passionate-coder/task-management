import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  task: {
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
    idx: null,
  },
  type: "new",
  id: null,
};

export const newTaskSlice = createSlice({
  name: "newTask",
  initialState,
  reducers: {
    handleAction: (state, action) => {
      state.isOpen = !state.isOpen;
      state.type = action.payload?.type || "new";
      state.id = action.payload?.id || null;
      if (action.payload?.task) {
        const { title, priority, status, deadline, description, idx } =
          action.payload.task;
        state.task.deadline = deadline?.substring(0, 10) || "";
        state.task.title = title;
        state.task.priority = priority;
        state.task.status = status;
        state.task.description = description;
        state.task.idx = idx;
      }
    },
    setTask: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        if (key == "deadline")
          state.task.deadline = action.payload.deadline?.substring(0, 10) || "";
        else state.task[key] = action.payload[key];
      });
    },
  },
});

export const { handleAction, setTask } = newTaskSlice.actions;
export default newTaskSlice.reducer;
