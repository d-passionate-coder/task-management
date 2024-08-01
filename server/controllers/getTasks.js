import User from "../models/User.js";

const getTasks = async (req, res) => {
  User.findById(req.user.id)
    .populate({
      path: "tasks",
    })
    .then((user) => {
      if (user) {
        return res.status(200).send(user.tasks);
      } else {
        throw new Error("User not found");
      }
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

export default getTasks;
