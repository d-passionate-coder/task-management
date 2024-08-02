import axios from "axios";
import { store } from "../redux/store.js";
import getTasks from "../redux/actions/tasks.js";

const handleAddTask = async (taskData) => {
  try {
    await axios.post("task/add", taskData);
    store.dispatch(getTasks());
  } catch (error) {
    console.log(error);
  }
};

export default handleAddTask;
