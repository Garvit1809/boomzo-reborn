import React from 'react';
import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EmailTemp } from '@/lib/EmailTemp';

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse JSON body
    const { email } = body; // Destructure email field
    console.log("Received email:", email);
    // Validate input
    if (!email) {
      return NextResponse.json({ message: 'Email are required' }, { status: 400 });
    }

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'grow@boomzo.in',
        pass: process.env.NEXT_PUBLIC_APP_PASSWORD, 
      },
    });

    // Render the email template
    const emailHtml = await render(
      React.createElement(EmailTemp, {
        email: String(email),
      })
    );

    // Define mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'grow@boomzo.in',
      to: String(email),
      subject: `🙋‍♂️ ${email}, Your Query Received!`,
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
