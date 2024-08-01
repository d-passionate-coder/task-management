import Task from "../models/Task.js";
import User from "../models/User.js";

const addMultipleTasks = async (req, res) => {
  try {
    const newTasks = await Task.insertMany(req.body);
    const user = await User.findById(req.user.id);

    if (newTasks) {
      newTasks.forEach((task) => {
        user.tasks.push(task.id);
      });
      await user.save();
    }
    res.status(201).send(newTasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default addMultipleTasks;
