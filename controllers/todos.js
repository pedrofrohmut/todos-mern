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
      error: "Error to get all the Todos: " + err.message
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
      error: "Error to add Todo: " + err.message
    })
  }
}

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById({ _id: req.params.id })
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found with the passed Id"
      })
    }
    await Todo.deleteOne(todo)
    return res.status(200).json({
      success: true,
      data: todo,
      message: "Todo deleted"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Error to delete todo: " + err.message
    })
  }
}

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id)
    const { name, description, task } = req.body
    const updatedTodo = { ...todo._doc, name, description, task }
    await Todo.update(todo, { name, description, task })
    res.status(200).json({
      success: true,
      data: { "before changes": todo, "Updated todo": updatedTodo },
      message: "Todo updated"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Error to update todo: " + err.message
    })
  }
}
