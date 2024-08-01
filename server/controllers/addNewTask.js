import Task from "../models/Task.js";
import User from "../models/User.js";

const addNewTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    const user = await User.findById(req.user.id);
    user.tasks.push(newTask.id);
    await user.save();
    res.status(201).send(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default addNewTask;
