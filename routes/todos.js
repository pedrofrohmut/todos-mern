const express = require("express")
const router = express.Router()
const {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo
} = require("../controllers/todos")

// @Desc: Get All Todos from persistence
// @Route: /todos
// @Access: Public
router.route("/").get(getTodos)

// @Desc: Get a todo by its ID
// @Route: /todos/:id
// @Access: Public
router.route("/:id").get(getTodoById)

// @Desc: Add a todo
// @Route: /todos
// @Access: Public
router.route("/").post(addTodo)

// @Desc: Update a todo by ID
// @Route: /todos
// @Access: Public
router.route("/:id").put(updateTodo)

// @Desc: Delete a todo by ID
// @Route: /todos
// @Access: Public
router.route("/:id").delete(deleteTodo)

module.exports = router
