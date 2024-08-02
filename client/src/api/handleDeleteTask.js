import axios from "axios";
import { store } from "../redux/store";
import { deleteTask } from "../redux/features/taskSlice";

const handleDeleteTask = async (id) => {
  store.dispatch(deleteTask(id));
  await axios.delete(`task/${id}`);
};

export default handleDeleteTask;
