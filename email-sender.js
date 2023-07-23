const nodemailer = require("nodemailer");

// Create a transporter using your email service (e.g., Gmail)
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "firas.mts551@gmail.com",
    pass: "a44z55er518/@21h",
  },
});

// Define the email options
const mailOptions = {
  from: "firas.mts551@gmail.com",
  to: "jihed147@gmail.com",
  subject: "Test Email",
  text: "Hello, this is a test email from Node.js!",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
