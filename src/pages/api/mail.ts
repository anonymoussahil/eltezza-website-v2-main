import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success?: boolean;
  error?: string;
};

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const message = `
      Name: ${body.fullName}\r\n
      Email: ${body.email}\r\n
      Subject: ${body.subject}\r\n
      Message: ${body.message}\r\n
    `;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "sagarsoni2409@gmail.com", // Replace with your SMTP email
        pass: "mjyq nzhz smsf ezmq",  // Replace with your SMTP password
      },
    });

    // Email options
    const mailOptions = {
      from: "sagarsoni2409@gmail.com", // Replace with your SMTP email
      to: "keyonpublicity@gmail.com", // recipient email
      subject: `Key On Website [CONTACT FORM]: ${body.subject}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}