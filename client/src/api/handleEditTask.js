import axios from "axios";
import { store } from "../redux/store";
import getTasks from "../redux/actions/tasks";

const handleEditTask = async (taskData) => {
  try {
    await axios.put("task/edit", taskData);
    store.dispatch(getTasks());
  } catch (error) {
    console.log(error);
  }
};

export default handleEditTask;
