const { PORT, CONNECTION_URL, JWT_SECRETE, SENDER_EMAIL, EMAIL_PASSWORD } =
  process.env;

module.exports = {
  port: PORT,
  connectionUrl: CONNECTION_URL,
  jwtSecrete: JWT_SECRETE,
  senderEmail: SENDER_EMAIL,
  emailPassword: EMAIL_PASSWORD,
};
