"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
}) {
    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
        return { success: false, error: "Please fill in all required fields." };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER, // Sender address
            to: "raleinnova@gmail.com", // Receiver address
            replyTo: email, // Allow reply to the user directly
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
          ${message.replace(/\n/g, "<br>")}
        </blockquote>
      `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send email. Please try again later." };
    }
}
