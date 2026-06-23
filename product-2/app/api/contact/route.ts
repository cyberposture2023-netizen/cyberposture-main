import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  size: string;
  interest: string;
  message: string;
  honeypot: string;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  // Drop honeypot submissions silently
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  // Basic validation
  if (!body.email || !body.name) {
    return NextResponse.json({ error: "missing required fields" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@cyberposture.ai";

  if (!apiKey || !toEmail) {
    // In dev without env vars, log and return success so the form can be tested
    console.warn("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL not set — skipping email send");
    return NextResponse.json({ ok: true });
  }

  const html = `
<h2 style="margin:0 0 16px;font-family:sans-serif">New CyberPosture contact submission</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
  <tr><td style="padding:4px 12px 4px 0;color:#666">Interest</td><td style="padding:4px 0"><strong>${esc(body.interest || "—")}</strong></td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td>${esc(body.name)}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td>${esc(body.email)}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#666">Company</td><td>${esc(body.company || "—")}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#666">Role</td><td>${esc(body.role || "—")}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#666">Company size</td><td>${esc(body.size || "—")}</td></tr>
</table>
${body.message ? `<p style="font-family:sans-serif;font-size:14px;margin:16px 0 0"><strong>Message:</strong><br>${esc(body.message).replace(/\n/g, "<br>")}</p>` : ""}
`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: body.email,
      subject: `CyberPosture contact: ${body.interest || "General Inquiry"} — ${body.name}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "unknown");
    console.error("[contact] Resend error:", res.status, err);
    return NextResponse.json({ error: "send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
