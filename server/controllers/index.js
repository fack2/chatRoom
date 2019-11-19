const express = require("express")
const router = express.Router()
const getMessages = require("./getMessages")

router.get("/api/getMessages", getMessages)

module.exports = router
