const express = require("express")
const router = express.Router()
const getMessages = require("./getMessages")
const addMessages = require("./addMessage")

router.get("/api/getMessages", getMessages)
// router.post("/api/addMessage", addMessages)

module.exports = router
