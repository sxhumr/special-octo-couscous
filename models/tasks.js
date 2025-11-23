import AddTask from "./addTask";

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // <-- must be outside fields
);

module.exports = mongoose.model("Task", taskSchema);
