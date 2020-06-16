const Task = require("../models/Task")

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find()
    res.status(200).json({
      success: true,
      data: tasks,
      count: tasks.length
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: "Error to get all the Tasks: " + err.message
    })
  }
}

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "No task matches the ID passed"
      })
    }
    return res.status(200).json({
      success: true,
      data: task
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: "Error to get a Task By Id: " + err.message
    })
  }
}

exports.addTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body)
    return res.status(201).json({
      success: true,
      data: task
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: "Error to add Task: " + err.message
    })
  }
}

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById({ _id: req.params.id })
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found with the passed Id"
      })
    }
    await Task.deleteOne(task)
    return res.status(200).json({
      success: true,
      data: task,
      message: "Task deleted"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Error to delete task: " + err.message
    })
  }
}

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    const { name } = req.body
    const updatedTask = { ...task._doc, name }
    await Task.update(task, { name })
    res.status(200).json({
      success: true,
      data: { "before changes": task, "Updated task": updatedTask },
      message: "Task updated"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Error to update task: " + err.message
    })
  }
}
