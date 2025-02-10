import nodemailer from "nodemailer";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = process.cwd() + "/email";
console.log(__dirname)

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendContactEmail(
  email: string,
  name: string,
  subject: string,
  number: string,
  message: string
) {
  const mailOption = {
    from: process.env.GMAIL_ADDRESS,
    to: "work.sbrakeshrath@gmail.com",
    subject: "Portfolio Email",
    html: await ejs.renderFile(__dirname + "/templates/sendContactEmail.template.html", {
      email,
      name,
      subject,
      number,
      message,
    }),
  };

  try {
    await transporter.sendMail(mailOption);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
