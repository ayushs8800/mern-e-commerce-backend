require("dotenv").config;
const nodemailer = require("nodemailer");

module.exports = function (email, subject, message) {
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'foobar@gmail.com',
        pass: 'foobar'
    }
  });

  let mailDetails = {
    from: process.env.gmail_user_auth,
    to: email,
    subject: subject,
    text: message,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};
