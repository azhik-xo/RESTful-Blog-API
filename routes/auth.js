const express = require("express");
const router = express.Router();
const { authController } = require("../controller");
const { signupValidation } = require("../validators/auth");
const validate = require("../validators/validation");

// routes
router.post("/sign-up", signupValidation, validate, authController.signup);

module.exports = router;
