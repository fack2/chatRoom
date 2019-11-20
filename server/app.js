const router = require("./controllers");
const express = require("express");
const path = require("path");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});


app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api",router);
app.use("/", (req, res) => {
  res.send("in home");
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

module.exports = server;
