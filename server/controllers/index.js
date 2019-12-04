const express = require("express");
const router = express.Router();
const getMessages = require("./getMessages");
const { signup } = require("./signup");
const validate = require("./validate");
const { signupValidation } = require("./validation");
const { login } = require("./login");
const { logout } = require("./logout");
const { auth } = require("../middlwares/auth");
const { userInformation } = require("../controllers/userInformation");

router.post("/signup", validate(signupValidation), signup);
router.get("/getMessages", auth, getMessages);
router.get("/logout", logout);
router.post("/login", login);
router.get("/profile/:userId", userInformation);

module.exports = router;
