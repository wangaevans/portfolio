import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    
    const authorizedEmail = process.env.NODEMAILER_EMAIL;
    const pass = process.env.NODEMAILER_EMAIL_PASS;

    if (!authorizedEmail || !pass) {
      return NextResponse.json(
        { error: "Email configuration missing" },
        { status: 500 }
      );
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: authorizedEmail,
        pass: pass,
      },
    });

    // Send the email using nodemailer
    const emailRes = await transport.sendMail({
      from: { name: `${name}`, address: email },
      to: authorizedEmail,
      replyTo: email,
      subject: `New message from ${name} -${email}`,
      html: `
        <p>${message}</p>
        <p><span>${name}<strong> Email to: ${email}</strong></span></p>
      `,
    });

    console.log("message sent", emailRes.messageId);
    
    return NextResponse.json(
      { success: true, messageId: emailRes.messageId },
      { status: 200 }
    );
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}