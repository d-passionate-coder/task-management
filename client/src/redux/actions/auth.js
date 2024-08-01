import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorToast } from "../../utils/CustomToast";
import sample_tasks from "../../constants/sample_tasks";

const loginUser = createAsyncThunk("loginUser", async (userData) => {
  try {
    const response = await axios.post("login", userData);
    const user = JSON.stringify(response.data);
    localStorage.setItem("user", user);
    return response.data;
  } catch (error) {
    errorToast(error.response.data);
    throw error;
  }
});

const logoutUser = createAsyncThunk("logoutUser", async () => {
  try {
    const response = await axios.get("logout");
    localStorage.removeItem("user");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const addSampleTasks = async () => {
  try {
    await axios.post("task/add/all", sample_tasks);
  } catch (error) {
    errorToast(error.response.data);
  }
};

const registerUser = createAsyncThunk("registerUser", async (userData) => {
  try {
    const response = await axios.post("signup", userData);
    const user = JSON.stringify(response.data);
    localStorage.setItem("user", user);
    await addSampleTasks();
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    errorToast(error.response.data);
    throw error;
  }
});

export { loginUser, logoutUser, registerUser };
