import axios from "axios";
import { store } from "../redux/store";
import getTasks from "../redux/actions/tasks";
import { updateTasks } from "../redux/features/taskSlice";

const handleEditTask = async (taskData) => {
  try {
    store.dispatch(updateTasks(taskData));
    await axios.put("task/edit", taskData);
  } catch (error) {
    console.log(error);
  }
};

export default handleEditTask;
