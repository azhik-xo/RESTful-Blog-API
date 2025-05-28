const express = require("express");
const router = express.Router();
const { authController } = require("../controller");
const {
  signupValidation,
  signinValidation,
  emailValidation,
  verifyUserValidation,
  recoverPasswordValidation,
  changePasswordValidation,
} = require("../validators/auth");
const validate = require("../validators/validation");
const isAuth = require("../middleware/isAuth");
// routes
router.post("/sign-up", signupValidation, validate, authController.signup);

router.post("/sign-in", signinValidation, validate, authController.signin);

router.post(
  "/send-verification-email",
  emailValidation,
  validate,
  authController.verifyCode
);

router.post(
  "/verify-user",
  verifyUserValidation,
  validate,
  authController.verifyUser
);

router.post(
  "/forgot-password-code",
  emailValidation,
  validate,
  authController.forgotPasswordCode
);

router.post(
  "/recover-password",
  recoverPasswordValidation,
  validate,
  authController.recoverPassword
);

router.put(
  "/change-password",
  changePasswordValidation,
  validate,
  isAuth,
  authController.changePassword
);

router.put("/update-profile", isAuth, authController.updateProfile)

module.exports = router;
