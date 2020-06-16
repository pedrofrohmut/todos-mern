const express = require("express")
const router = express.Router()
const {
  getTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask
} = require("../controllers/tasks")

// @Desc: Get All Tasks from persistence
// @Route: /tasks
// @Access: Public
router.route("/").get(getTasks)

// @Desc: Get a task by its ID
// @Route: /tasks/:id
// @Access: Public
router.route("/:id").get(getTaskById)

// @Desc: Add a task
// @Route: /tasks
// @Access: Public
router.route("/").post(addTask)

// @Desc: Update a task by ID
// @Route: /tasks
// @Access: Public
router.route("/:id").put(updateTask)

// @Desc: Delete a task by ID
// @Route: /tasks
// @Access: Public
router.route("/:id").delete(deleteTask)

module.exports = router
