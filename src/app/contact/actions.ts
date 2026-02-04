"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "your-email@example.com",
      subject: `New Inquiry: ${service} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}