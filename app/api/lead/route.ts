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

function normalizeInterests(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((value) => sanitizeText(value, 160)).filter(Boolean).slice(0, 8);
}

async function sendLeadNotificationEmail(lead: LeadNotificationInput) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return { status: "skipped" as const };
  }

  const to = process.env.LEAD_NOTIFICATION_TO || "eric@mmptperformance.com";
  const from =
    process.env.LEAD_NOTIFICATION_FROM || "MMPT Website <notifications@mmptperformance.com>";
  const interestList = lead.interests.length ? lead.interests.join(", ") : "No interests selected";

  const text = [
    "New MMPT website lead submitted.",
    "",
    `Name: ${lead.firstName} ${lead.lastName}`,
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
      <p style="margin:0 0 12px;"><strong>Name:</strong> ${lead.firstName} ${lead.lastName}</p>
      <p style="margin:0 0 12px;"><strong>Email:</strong> ${lead.email}</p>
      <p style="margin:0 0 12px;"><strong>Phone:</strong> ${lead.phone}</p>
      <p style="margin:0 0 12px;"><strong>Source:</strong> ${lead.source}</p>
      <p style="margin:0 0 12px;"><strong>Page:</strong> ${lead.pagePath || "Unknown"}</p>
      <p style="margin:0 0 12px;"><strong>Submitted:</strong> ${lead.submittedAtIso}</p>
      <p style="margin:0 0 12px;"><strong>Interests:</strong> ${interestList}</p>
      <div style="margin:20px 0;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">
        <p style="margin:0 0 8px;"><strong>Goal</strong></p>
        <p style="margin:0;white-space:pre-line;">${lead.goal}</p>
      </div>
      <p style="margin:0;"><strong>Current URL:</strong> ${lead.currentUrl || "Unknown"}</p>
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
      to: [to],
      reply_to: lead.email,
      subject: `New MMPT lead: ${lead.firstName} ${lead.lastName}`,
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
