import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASSWORD = process.env.USER_PASSWORD;

if (!USER_EMAIL || !USER_PASSWORD) {
  throw new Error(
    "Missing USER_EMAIL or USER_PASSWORD in environment variables."
  );
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
});

interface EmailPayload {
  sendEmail: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // req.json() is unknown — so we validate first
    const body: unknown = await req.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("sendEmail" in body) ||
      !("message" in body)
    ) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 }
      );
    }

    const { sendEmail, message } = body as EmailPayload;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
         <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; font-size: 24px;">📬 New Contact Form Message</h2>
        </div>
        <div style="background: white; padding: 20px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
            <strong>Hello,</strong>
          </p>
          <p style="color: #666; margin-bottom: 20px;">
            You received a new message from your portfolio contact form:
          </p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; border: 1px solid #ddd; margin-bottom: 20px;">
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; color: #333; margin: 0;">${message}</pre>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">
            <strong>Sender's Email:</strong> 
            <a href="mailto:${sendEmail}" style="color: #667eea; text-decoration: none;">${sendEmail}</a>
          </p>
        </div>
        <div style="background: #f8f9fa; padding: 15px; text-align: center; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color: #999; font-size: 12px; margin: 0;">
            This message was sent from your portfolio website.<br>
            © ${new Date().getFullYear()} Anthony. All rights reserved.
          </p>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Client" <${sendEmail}>`,
      to: USER_EMAIL,
      subject: "New message from portfolio contact form",
      html: htmlContent,
    });

    return NextResponse.json({
      message: "Message sent",
      messageId: info.messageId,
    });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
