import axios from "axios";
import { store } from "../redux/store";
import { deleteTask } from "../redux/features/taskSlice";

const handleDeleteTask = async (id) => {
  await axios.delete(`task/${id}`);
  store.dispatch(deleteTask(id));
};

export default handleDeleteTask;
