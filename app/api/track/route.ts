import { NextRequest, NextResponse } from "next/server";

type RawTrackPayload = {
  type?: string;
  intent?: string;
  label?: string;
  path?: string;
  referrer?: string;
  viewport?: string;
  ts?: number;
};

function sanitize(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, 600);
}

export async function POST(request: NextRequest) {
  const raw: RawTrackPayload = await request.json().catch(() => ({}));

  const payload = {
    type: sanitize(raw.type || "event"),
    intent: sanitize(raw.intent),
    label: sanitize(raw.label),
    path: sanitize(raw.path) || "/",
    referrer: sanitize(raw.referrer),
    viewport: sanitize(raw.viewport),
    ts: Number.isFinite(raw.ts) ? raw.ts : Date.now(),
    ip: sanitize(request.headers.get("x-forwarded-for")),
    ua: sanitize(request.headers.get("user-agent")),
  };

  if (!payload.type) {
    return NextResponse.json({ error: "Invalid track payload." }, { status: 400 });
  }

  console.info("[mmpt_track]", JSON.stringify(payload));

  return NextResponse.json({ ok: true }, { status: 200 });
}
