import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(name: string, email: string) {
  try {
    const { error } = await resend.emails.send({
      from: 'SwipeRight <hello@getswiperight.com>',
      to: [email],
      subject: '🎉 You’re on the SwipeRight Waitlist!',
      html: `<p>Hi ${name || 'there'},</p>
        <p>Thanks for joining the SwipeRight waitlist!</p>
        <p>You’ll be among the first to know when we launch.</p>
        <br/>
        <p> Smarter swiping is coming soon!</p>
        <p>– The SwipeRight Team</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
    }
  } catch (err) {
    console.error('Unexpected email error:', err);
  }
}