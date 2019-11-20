const express = require("express");
const router = express.Router();
const {userInformation} = require('../controllers/userInformation')


router.get('/profile/:userId',userInformation);
module.exports = router;
