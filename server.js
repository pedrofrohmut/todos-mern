const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config({ path: "./config/config.env" })

connectDB()

const app = express()

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

// Express App - use Method: Mounts the specified middleware function at the specified path
// @Middleware: Routes for Todos Controller
app.use("/api/v1/todos", require("./routes/todos"))
app.use("/api/v1/tasks", require("./routes/tasks"))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port: ${PORT}`))
