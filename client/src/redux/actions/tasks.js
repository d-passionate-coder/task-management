import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getTasks = createAsyncThunk("tasks", async () => {
  try {
    const response = await axios.get("task");
    let tasks = response.data;
    tasks.sort((a, b) => {
      let val = 0;
      if (a.idx > b.idx) val = 1;
      else if (a.idx < b.idx) val = -1;
      return val;
    });
    return tasks;
  } catch (error) {
    throw error;
  }
});

export default getTasks;
