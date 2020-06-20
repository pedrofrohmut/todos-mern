const express = require("express")
const router = express.Router()
const {
  getTodos,
  getTodoById,
  getTodosByTaskId,
  addTodo,
  deleteTodo,
  updateTodo,
  setAsCompleted,
  setAsNotCompleted
} = require("../controllers/todos")

// @Desc: Get All Todos from persistence
// @Route: /todos
// @Access: Public
router.route("/").get(getTodos)

// @Desc: Get a todo by its ID
// @Route: /todos/:id
// @Access: Public
router.route("/:id").get(getTodoById)

// @Desc: Get a todo by task ID
// @Route: /todos/:id
// @Access: Public
router.route("/task/:id").get(getTodosByTaskId)

// @Desc: Add a todo
// @Route: /todos
// @Access: Public
router.route("/").post(addTodo)

// @Desc: Delete a todo by ID
// @Route: /todos
// @Access: Public
router.route("/:id").delete(deleteTodo)

// @Desc: Update a todo by ID
// @Route: /todos
// @Access: Public
router.route("/:id").put(updateTodo)

// @Desc: Set todo as completed
// @Route: /todos/{id}/completed
// @Access: Public
router.route("/:id/completed").patch(setAsCompleted)

// @Desc: Set todo as NOT completed
// @Route: /todos/{id}/notcompleted
// @Access: Public
router.route("/:id/notcompleted").patch(setAsNotCompleted)

module.exports = router
