import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend";

export default async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "https://www.getswiperight.com", // Replace * with your domain for tighter control
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  const { name, email } = await req.json();
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Missing or invalid Authorization header" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://www.getswiperight.com",
      },
    });
  }

  const resend = new Resend(authHeader.replace("Bearer ", "").trim());

  try {
    const { error } = await resend.emails.send({
      from: "SwipeRight <hello@getswiperight.com>",
      to: [email],
      subject: "🎉 You’re on the SwipeRight Waitlist!",
      html: `<p>Hi ${name || "there"},</p>
        <p>Thanks for joining the SwipeRight waitlist!</p>
        <p>You’ll be among the first to know when we launch.</p>
        <br/>
        <p>🚀 Smarter swiping is coming soon.</p>
        <p>– The SwipeRight Team</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://www.getswiperight.com",
        },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://www.getswiperight.com",
      },
    });
  } catch (err) {
    console.error("Unexpected email error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://www.getswiperight.com",
      },
    });
  }
}

export const serve = handler;