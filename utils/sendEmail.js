const nodemail = require("nodemailer");
const {senderEmail,emailPassword} = require("../config/keys");

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: senderEmail,
      pass: emailPassword,
    },
  });
  const message = {
    to: emailTo,
    subject,
    html: `<div>
            <h3>Use this below code to ${content}</h3>
            <p><strong>code:</strong>${code}</p>
          </div>
    `,
  };

  await transporter.sendMail(message);
};

module.exports = sendEmail;
