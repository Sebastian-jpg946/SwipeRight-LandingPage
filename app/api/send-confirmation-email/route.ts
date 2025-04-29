// app/api/send-confirmation-email/route.ts
import { NextResponse } from 'next/server';
import { sendConfirmationEmail } from '../../../lib/sendConfirmationEmail';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log("📨 Sending email to:", email);
    await sendConfirmationEmail(name, email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🔥 API Route Error:", error);
    return NextResponse.json({ error: 'Internal Server Error', detail: (error as Error).message }, { status: 500 });
  }
}