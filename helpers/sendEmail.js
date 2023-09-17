const nodemailer = require("nodemailer");

const { MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: MAILTRAP_USER,
		pass: MAILTRAP_PASSWORD,
	},
});

const sendEmail = (message) => {
	message["from"] = "lezver1994@gmail.com";

	return transport.sendMail(message);
};

module.exports = sendEmail;
