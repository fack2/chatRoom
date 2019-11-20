const { userInformation } = require("../controllers/userInformation");

module.exports = router;
const express = require("express");
const router = express.Router();
router.get("/profile/:userId", userInformation);
const getMessages = require("./getMessages");
const { signup } = require("./signup");
const validate = require("./validate");
const { signupValidation } = require("./validation");

router.get("/getMessages", getMessages);
router.post("/signup", validate(signupValidation), signup);
module.exports = router;
