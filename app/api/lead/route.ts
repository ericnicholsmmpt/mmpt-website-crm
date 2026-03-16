import { NextRequest, NextResponse } from "next/server";
import {
  applyIdentityCookies,
  getAttribution,
  getClientIp,
  getIdentity,
  insertWebsiteLead,
  persistWebsiteIdentity,
  sanitizeText,
} from "../../../lib/server/website-data";

type LeadPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  goal?: string;
  interests?: string[];
  source?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadNotificationInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  goal: string;
  interests: string[];
  source: string;
  pagePath: string;
  currentUrl: string;
  submittedAtIso: string;
};

const defaultLeadNotificationTo = "eric@mmptperformance.com";
const defaultLeadNotificationFrom = "MMPT Website <notifications@mmptperformance.com>";

function normalizeInterests(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((value) => sanitizeText(value, 160)).filter(Boolean).slice(0, 8);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseNotificationRecipients(input: string | undefined) {
  const recipients = (input || defaultLeadNotificationTo)
    .split(/[,;\n]/)
    .map((value) => sanitizeText(value, 320))
    .filter(Boolean);

  return recipients.length ? recipients : [defaultLeadNotificationTo];
}

async function sendLeadNotificationEmail(lead: LeadNotificationInput) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return { status: "skipped" as const };
  }

  const to = parseNotificationRecipients(process.env.LEAD_NOTIFICATION_TO);
  const from = sanitizeText(process.env.LEAD_NOTIFICATION_FROM, 320) || defaultLeadNotificationFrom;
  const interestList = lead.interests.length ? lead.interests.join(", ") : "No interests selected";
  const fullName = `${lead.firstName} ${lead.lastName}`;
  const safeLead = {
    fullName: escapeHtml(fullName),
    email: escapeHtml(lead.email),
    phone: escapeHtml(lead.phone),
    source: escapeHtml(lead.source),
    pagePath: escapeHtml(lead.pagePath || "Unknown"),
    submittedAtIso: escapeHtml(lead.submittedAtIso),
    interestList: escapeHtml(interestList),
    goal: escapeHtml(lead.goal),
    currentUrl: escapeHtml(lead.currentUrl || "Unknown"),
  };

  const text = [
    "New MMPT website lead submitted.",
    "",
    `Name: ${fullName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Source: ${lead.source}`,
    `Page: ${lead.pagePath || "Unknown"}`,
    `Submitted: ${lead.submittedAtIso}`,
    `Interests: ${interestList}`,
    "",
    "Goal:",
    lead.goal,
    "",
    `Current URL: ${lead.currentUrl || "Unknown"}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h2 style="margin:0 0 16px;">New MMPT website lead</h2>
      <p style="margin:0 0 12px;"><strong>Name:</strong> ${safeLead.fullName}</p>
      <p style="margin:0 0 12px;"><strong>Email:</strong> ${safeLead.email}</p>
      <p style="margin:0 0 12px;"><strong>Phone:</strong> ${safeLead.phone}</p>
      <p style="margin:0 0 12px;"><strong>Source:</strong> ${safeLead.source}</p>
      <p style="margin:0 0 12px;"><strong>Page:</strong> ${safeLead.pagePath}</p>
      <p style="margin:0 0 12px;"><strong>Submitted:</strong> ${safeLead.submittedAtIso}</p>
      <p style="margin:0 0 12px;"><strong>Interests:</strong> ${safeLead.interestList}</p>
      <div style="margin:20px 0;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">
        <p style="margin:0 0 8px;"><strong>Goal</strong></p>
        <p style="margin:0;white-space:pre-line;">${safeLead.goal}</p>
      </div>
      <p style="margin:0;"><strong>Current URL:</strong> ${safeLead.currentUrl}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: lead.email,
      subject: `New MMPT lead: ${fullName}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Resend request failed: ${response.status} ${details}`);
  }

  return { status: "sent" as const };
}

export async function POST(request: NextRequest) {
  const payload: LeadPayload = await request.json().catch(() => ({}));

  const firstName = sanitizeText(payload.firstName, 160);
  const lastName = sanitizeText(payload.lastName, 160);
  const email = sanitizeText(payload.email, 200);
  const phone = sanitizeText(payload.phone, 80);
  const goal = sanitizeText(payload.goal, 1200);
  const interests = normalizeInterests(payload.interests);
  const source = sanitizeText(payload.source, 120) || "unknown";

  if (!firstName || !lastName || !email || !phone || !goal) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const identity = getIdentity(request);
  const submittedAt = Date.now();
  const attribution = getAttribution(request);
  let pagePath = "";
  if (attribution.currentUrl) {
    try {
      const url = new URL(attribution.currentUrl);
      pagePath = `${url.pathname}${url.search}`;
    } catch {
      pagePath = "";
    }
  }
  const userAgent = sanitizeText(request.headers.get("user-agent"), 500);
  const ip = getClientIp(request);
  const submittedAtIso = new Date(submittedAt).toISOString();

  const lead = {
    id: crypto.randomUUID(),
    visitorId: identity.visitorId,
    sessionId: identity.sessionId,
    firstName,
    lastName,
    email,
    phone,
    goal,
    interests,
    source,
    ts: submittedAt,
    ip: ip || "unknown",
    ua: userAgent,
    currentUrl: attribution.currentUrl,
    pagePath,
    utmSource: attribution.utmSource,
    utmMedium: attribution.utmMedium,
    utmCampaign: attribution.utmCampaign,
    utmTerm: attribution.utmTerm,
    utmContent: attribution.utmContent,
  };

  await persistWebsiteIdentity({
    request,
    path: pagePath || "/contact",
    referrer: attribution.currentUrl,
    userAgent,
    timestamp: submittedAt,
    identity,
  }).catch((error) => {
    console.error("[mmpt_lead_identity_error]", error);
  });

  const storage = await insertWebsiteLead({
    id: lead.id,
    visitor_id: lead.visitorId,
    session_id: lead.sessionId,
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    goal,
    interests,
    source,
    path: pagePath || "/contact",
    current_url: attribution.currentUrl,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_term: attribution.utmTerm,
    utm_content: attribution.utmContent,
    ip_address: ip,
    user_agent: userAgent,
    submitted_at: submittedAtIso,
  }).catch((error) => {
    console.error("[mmpt_lead_store_error]", error);
    return { storage: "console" as const };
  });

  const notification = await sendLeadNotificationEmail({
    firstName,
    lastName,
    email,
    phone,
    goal,
    interests,
    source,
    pagePath: pagePath || "/contact",
    currentUrl: attribution.currentUrl,
    submittedAtIso,
  }).catch((error) => {
    console.error("[mmpt_lead_notification_error]", error);
    return { status: "failed" as const };
  });

  console.info("[mmpt_lead_capture]", JSON.stringify(lead));

  const response = NextResponse.json(
    {
      ok: true,
      leadId: lead.id,
      storage: storage.storage,
      notification: notification.status,
      message: "Your request has been submitted. MMPT will review it and reach out with next steps soon.",
    },
    { status: 201 }
  );

  applyIdentityCookies(response, identity);

  return response;
}
