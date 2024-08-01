import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
    },
    description: {
      type: String,
    },
    idx: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);

export default Task;
