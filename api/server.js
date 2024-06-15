const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  service: process.env.EMAIL_SERVICE,
  secure: process.env.EMAIL_SECURE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: false,
  logger: true
})

// Route to handle form submission
app.post("/send", (req, res) => {
  const { email, firstName, lastName, countryCode, mobileNumber, objective } =
    req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_USER, 
    subject: "New Form Submission",
    text: `
      Email: ${email}
      First Name: ${firstName}
      Last Name: ${lastName}
      Country Code: ${countryCode}
      Mobile Number: ${mobileNumber}
      Objective: ${objective}
      Confirm Payment in Paystack
    `,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.message });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
