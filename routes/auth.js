const express = require("express");
const router = express.Router();
const {authController} = require("../controller");
// routes
router.post("/sign-up",authController.signup);


module.exports=router;