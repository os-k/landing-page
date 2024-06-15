// api/send.js

const nodemailer = require('nodemailer');
require('dotenv').config();

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
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, firstName, lastName, countryCode, mobileNumber, objective } = req.body;

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

    try {
      await transport.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
