const Todo = require("../models/Todo")

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find()
    res.status(200).json({
      success: true,
      data: todos,
      count: todos.length
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: "Error to get all the Todos: " + err
    })
  }
}

exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No todo matches the ID passed"
      })
    }
    return res.status(200).json({
      success: true,
      data: todo
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: "Error to get a Todo By Id: " + err.message
    })
  }
}

exports.addTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body)
    return res.status(201).json({
      success: true,
      data: todo
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      error: "Error to add Todo: " + err
    })
  }
}

exports.deleteTodo = async (req, res, next) => {
  res.send("DELETE TODO")
}

exports.updateTodo = async (req, res, next) => {
  res.send("UPDATE TODO")
}
