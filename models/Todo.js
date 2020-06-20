const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: false,
    default: "No description"
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  },
  isCompleted: {
    type: Boolean,
    required: false,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Todo", TodoSchema)
