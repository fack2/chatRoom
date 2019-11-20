const express = require("express");
const router = express.Router();
const getMessages = require("./getMessages");
const { signup } = require("./signup");
const validate = require("./validate");
const { signupValidation } = require("./validation");
const { login } = require("./login");
const { auth } = require("../middlwares/auth");

router.post("/signup", validate(signupValidation), signup);
router.get("/getMessages", getMessages);
router.get("/chech-auth", auth);
router.post("/login", login);

module.exports = router;
