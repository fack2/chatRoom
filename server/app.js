const router = require("./controllers")
const express = require("express")
const path = require("path")
const app = express()
const addMessage = require("./controllers/addMessage")
const getMessage = require("./controllers/getMessage")
const server = require("http").createServer(app)
const io = require("socket.io").listen(server)

io.on("connection", socket => {
  console.log("a user connected :D")
  socket.on("chat message", m => {
    const { user_id, msg } = m
    addMessage(user_id, msg).then(t => {
      const cc = getMessage(user_id).then(r => {
        io.emit("chat message", r[0])
      })
    })
  })
})

app.use(express.static(path.join(__dirname, "..", "client", "build")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/api", router)
app.use("/", (req, res) => {
  res.send("in home")
})

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
  })
}

module.exports = server
