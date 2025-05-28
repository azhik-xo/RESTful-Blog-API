const { check } = require("express-validator");

const signupValidation = [
  check("name").notEmpty().withMessage("Nmae is required"),

  check("email")
    .isEmail()
    .withMessage("Invalid E-mail")
    .notEmpty()
    .withMessage("E-mail is required"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should 6 character long")
    .notEmpty()
    .withMessage("Password is required"),
];

const signinValidation = [
  check("email")
    .isEmail()
    .withMessage("Invalid credentials")
    .notEmpty()
    .withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
];

const emailValidation = [
  check("email")
    .isEmail()
    .withMessage("Invalid credentials")
    .notEmpty()
    .withMessage("Email is required"),
];

const verifyUserValidation = [
  check("email")
    .isEmail()
    .withMessage("Invalid credentials")
    .notEmpty()
    .withMessage("Email is required"),
  check("code").notEmpty().withMessage("code is required"),
];

const recoverPasswordValidation = [
  check("email")
    .isEmail()
    .withMessage("Invalid credentials")
    .notEmpty()
    .withMessage("Email is required"),

  check("code").notEmpty().withMessage("code is required"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should 6 character long")
    .notEmpty()
    .withMessage("Password is required"),
];

const changePasswordValidation = [
  check("oldPassword").notEmpty().withMessage("Old Password is required"),
  check("newPassword")
    .notEmpty()
    .withMessage("New Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should 6 character long"),
];

const updateProfileValidation =[
  check("email")
]

module.exports = {
  signupValidation,
  signinValidation,
  emailValidation,
  verifyUserValidation,
  recoverPasswordValidation,
  changePasswordValidation,
};
