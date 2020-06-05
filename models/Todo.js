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
  category: {
    type: String,
    trim: true,
    required: false,
    default: "No category"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Todo", TodoSchema)
