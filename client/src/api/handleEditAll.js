import axios from "axios";
import { store } from "../redux/store";
import getTasks from "../redux/actions/tasks";

const handleEditAllTask = async (taskData) => {
  try {
    console.log("taskData", taskData);
    await axios.put("task/edit/all", taskData);
    store.dispatch(getTasks());
  } catch (error) {
    console.log(error);
  }
};

export default handleEditAllTask;
