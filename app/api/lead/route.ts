import { NextRequest, NextResponse } from "next/server";

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

function sanitize(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, 500);
}

function normalizeInterests(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((value) => sanitize(value)).filter(Boolean).slice(0, 8);
}

export async function POST(request: NextRequest) {
  const payload: LeadPayload = await request.json().catch(() => ({}));

  const firstName = sanitize(payload.firstName);
  const lastName = sanitize(payload.lastName);
  const email = sanitize(payload.email);
  const phone = sanitize(payload.phone);
  const goal = sanitize(payload.goal);
  const interests = normalizeInterests(payload.interests);
  const source = sanitize(payload.source) || "unknown";

  if (!firstName || !lastName || !email || !phone || !goal) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const lead = {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    email,
    phone,
    goal,
    interests,
    source,
    ts: Date.now(),
    ip: sanitize(request.headers.get("x-forwarded-for")) || "unknown",
    ua: sanitize(request.headers.get("user-agent")),
  };

  console.info("[mmpt_lead_capture]", JSON.stringify(lead));

  return NextResponse.json(
    {
      ok: true,
      leadId: lead.id,
      message: "Lead captured. We'll follow up with next steps.",
    },
    { status: 201 }
  );
}
