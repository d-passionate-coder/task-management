import axios from "axios";
import { updateAll } from "../redux/features/taskSlice";
import { store } from "../redux/store";

const handleEditAllTask = async (taskData) => {
  try {
    store.dispatch(updateAll(taskData));
    await axios.put("task/edit/all", taskData);
  } catch (error) {
    console.log(error);
  }
};

export default handleEditAllTask;
