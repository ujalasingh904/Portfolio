// Usage: Send email using nodemailer
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Nodemailer transporter setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  
  

  // Email options
  const mailOptions = {
    from: email,
    to: "singhujala2019@gmail.com",
    subject: `New message from ${name}`,
    text: message,
    html: `<p>You have a new message from <b>${name}</b> (${email}):</p><p>${message}</p>`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);  
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
