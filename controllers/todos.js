exports.getTodos = async (req, res, next) => {
  res.send("GET TODOS")
}

exports.getTodoById = async (req, res, next) => {
  res.send("GET TODO BY ID")
}

exports.addTodo = async (req, res, next) => {
  res.send("ADD TODO")
}

exports.deleteTodo = async (req, res, next) => {
  res.send("DELETE TODO")
}

exports.updateTodo = async (req, res, next) => {
  res.send("UPDATE TODO")
}
