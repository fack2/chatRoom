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
    console.log(user_id, msg, m, "011111111111111111111111111111111111111111111111111110")
    addMessage(user_id, msg).then(t => {
      const cc = getMessage(user_id).then(r => {
        io.emit("chat message", r[0])
        console.log("444444444444444444444", r)
      })
    })

    // console.log("444444444444444444444", cc)
    // io.emit("chat message", { msg, user_id: user_id })
  })
})

app.use(express.static(path.join(__dirname, "..", "client", "build")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use("/", (req, res) => {
  res.send("in home")
})

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
  })
}

module.exports = server
