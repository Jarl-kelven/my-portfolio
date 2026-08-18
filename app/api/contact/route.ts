import { Resend } from "resend";
import { NextRequest } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name:    z.string().min(1, "Name is required").max(100),
  email:   z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body   = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
  return Response.json(
    { error: parsed.error.issues[0].message },
    { status: 400 }
  );
}

    const { name, email, message } = parsed.data;

    await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>",
      to:      "aghkelvin@gmail.com", // 🔁 replace with your actual email
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#111;margin-bottom:4px">New portfolio message</h2>
          <p style="color:#888;font-size:13px;margin-bottom:24px">Sent from your portfolio contact form</p>

          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;color:#888;font-size:13px;width:80px">Name</td>
              <td style="padding:12px 0;border-bottom:1px solid #eee;color:#111;font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;color:#888;font-size:13px">Email</td>
              <td style="padding:12px 0;border-bottom:1px solid #eee;font-size:14px">
                <a href="mailto:${email}" style="color:#C0460A">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 16px 0 0;color:#888;font-size:13px;vertical-align:top">Message</td>
              <td style="padding:12px 0 0;color:#111;font-size:14px;line-height:1.6">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>

          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #eee">
            <a href="mailto:${email}" style="display:inline-block;background:#C0460A;color:white;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:500">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}