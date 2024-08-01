import Task from "../models/Task.js";

const handleEdit = async (req, res) => {
  try {
    const task = req.body;
    const updatedTask = await Task.updateOne({ _id: task._id }, task);
    return res.status(200).send(updatedTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handleEdit;
