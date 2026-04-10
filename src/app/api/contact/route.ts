import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      projectType,
      stoneType,
      squareFootage,
      timeline,
      message,
    } = body;

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: process.env.TO_EMAIL as string,
      replyTo: email,
      subject: `New Quote Request — ${name} (${projectType})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1C1C1C;">
          <div style="background: #B8965A; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Superior Stone — superiorstone.co</p>
          </div>
          <div style="padding: 32px; background: #F9F7F4; border: 1px solid #E8E4DF;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600; width: 40%;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;"><a href="tel:${phone}" style="color: #B8965A;">${phone}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;"><a href="mailto:${email}" style="color: #B8965A;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600;">Project Type</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;">${projectType}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600;">Stone Type</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;">${stoneType}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600;">Square Footage</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;">${squareFootage ? squareFootage + " sq ft" : "Not specified"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF; font-weight: 600;">Timeline</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E4DF;">${timeline}</td></tr>
              ${message ? `<tr><td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
            </table>
          </div>
          <div style="padding: 16px 32px; background: #E8E4DF; font-size: 12px; color: #666;">
            Sent from superiorstone.co contact form
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
