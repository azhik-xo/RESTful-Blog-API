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


module.exports={signupValidation};