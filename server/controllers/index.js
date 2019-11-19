const express = require("express")
const router = express.Router()
const { signup } = require("./signup")
const validate = require("./validate")
const { signupValidation } = require("./validation")

router.post("/signup", validate(signupValidation), signup)
module.exports = router
