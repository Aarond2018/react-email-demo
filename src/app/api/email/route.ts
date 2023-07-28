import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import EmailTemplate from '../../../emails/index';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data)
  try {
    await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: data.email,
      subject: "Component-based Email Template",
      react: EmailTemplate({ userName: data.uName })
    });
    return NextResponse.json({res: 'Ok'})
  } catch(e) {
    return NextResponse.json(e)
  }
}