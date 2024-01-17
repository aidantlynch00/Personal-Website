require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const server = express();
server.use(express.json());
server.use(express.static("public"));

const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
};

let transporter = nodemailer.createTransport(smtpOptions);

server.post("/contact/mail", (req, res) => {
    const mailData = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: process.env.SMTP_USER,
        subject: req.body.subject,
        text: req.body.body
    };

    transporter.sendMail(mailData, (err, info) => {
        console.log(err, info);
        res.sendStatus(err ? 500 : 200);
    });
});

server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Starting server on port ${process.env.EXPRESS_PORT}`);
});