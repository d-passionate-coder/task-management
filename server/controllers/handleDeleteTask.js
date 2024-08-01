import Task from "../models/Task.js";
import User from "../models/User.js";

const handleDelete = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.user.id },
      {
        $pull: {
          tasks: req.params.id,
        },
      }
    );
    await Task.deleteOne({ _id: req.params.id });
    return res.send("Succesfully removed");
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default handleDelete;
