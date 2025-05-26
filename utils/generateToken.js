const jwt = require("jsonwebtoken");
const { jwtSecrete } = require("../config/keys");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    jwtSecrete,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

module.exports = generateToken;