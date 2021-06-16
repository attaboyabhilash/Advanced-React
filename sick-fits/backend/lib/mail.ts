import 'dotenv/config';
import { createTransport, getTestMessageUrl } from 'nodemailer';

const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const htmlTemplate = (text: string): string => `
        <div style="border: 1px solid #000; padding: 20px; font-family: sans-serif; line-height: 2; font-size: 20px;">
            <h2>Hello There</h2>
            <p>${text}</p>
            <p>Regards, Abhilash</p>
        </div>
    `;

interface Envelope {
  from: string;
  to?: string[] | null;
}
interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}

const sendPasswordResetEmail = async (
  resetToken: string,
  to: string
): Promise<void> => {
  const info = (await transporter.sendMail({
    to,
    from: 'test@example.com',
    subject: 'Reset your password',
    html: htmlTemplate(`Your password reset token is here
            <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}" target="_blank">
                reset password
            </a>
        `),
  })) as MailResponse;
  if (process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`📧 Mail Sent! Preview here ${getTestMessageUrl(info)}`);
  }
};

export default sendPasswordResetEmail;
