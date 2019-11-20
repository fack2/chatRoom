const express = require("express")
const router = express.Router()
const getMessages = require("./getMessages")
const { signup } = require("./signup")
const validate = require("./validate")
const { signupValidation } = require("./validation")

router.get("/getMessages", getMessages)
router.post("/signup", validate(signupValidation), signup)
module.exports = router
