import Task from "../models/Task.js";

const updateMany = (req, res) => {
  let toUpdate = req.body;
  toUpdate.forEach(async (task) => {
    try {
      await Task.updateOne({ _id: task._id }, task);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });
  return res.status(200).send("Update done");
};

export default updateMany;
