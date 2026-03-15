import { NextRequest, NextResponse } from "next/server";
import {
  applyIdentityCookies,
  getAttribution,
  getClientIp,
  getIdentity,
  insertWebsiteEvent,
  persistWebsiteIdentity,
  sanitizeText,
} from "../../../lib/server/website-data";

type RawTrackPayload = {
  type?: string;
  intent?: string;
  label?: string;
  path?: string;
  referrer?: string;
  viewport?: string;
  ts?: number;
};

export async function POST(request: NextRequest) {
  const raw: RawTrackPayload = await request.json().catch(() => ({}));
  const identity = getIdentity(request);
  const attribution = getAttribution(request);
  const timestamp = typeof raw.ts === "number" && Number.isFinite(raw.ts) ? raw.ts : Date.now();
  const userAgent = sanitizeText(request.headers.get("user-agent"), 500);
  const ip = getClientIp(request);

  const payload = {
    type: sanitizeText(raw.type || "event", 80),
    intent: sanitizeText(raw.intent, 160),
    label: sanitizeText(raw.label, 220),
    path: sanitizeText(raw.path, 500) || "/",
    referrer: sanitizeText(raw.referrer, 1000),
    viewport: sanitizeText(raw.viewport, 120),
    ts: timestamp,
    ip,
    ua: userAgent,
    currentUrl: attribution.currentUrl,
    utmSource: attribution.utmSource,
    utmMedium: attribution.utmMedium,
    utmCampaign: attribution.utmCampaign,
    utmTerm: attribution.utmTerm,
    utmContent: attribution.utmContent,
  };

  if (!payload.type) {
    return NextResponse.json({ error: "Invalid track payload." }, { status: 400 });
  }

  await persistWebsiteIdentity({
    request,
    path: payload.path,
    referrer: payload.referrer,
    userAgent,
    timestamp,
    identity,
  }).catch((error) => {
    console.error("[mmpt_track_identity_error]", error);
  });

  const storage = await insertWebsiteEvent({
    visitor_id: identity.visitorId,
    session_id: identity.sessionId,
    event_type: payload.type,
    intent: payload.intent,
    label: payload.label,
    path: payload.path,
    referrer: payload.referrer,
    viewport: payload.viewport,
    current_url: payload.currentUrl,
    utm_source: payload.utmSource,
    utm_medium: payload.utmMedium,
    utm_campaign: payload.utmCampaign,
    utm_term: payload.utmTerm,
    utm_content: payload.utmContent,
    ip_address: ip,
    user_agent: userAgent,
    metadata: {},
    occurred_at: new Date(timestamp).toISOString(),
  }).catch((error) => {
    console.error("[mmpt_track_store_error]", error);
    return { storage: "console" as const };
  });

  console.info("[mmpt_track]", JSON.stringify(payload));

  const response = NextResponse.json({ ok: true, storage: storage.storage }, { status: 200 });
  applyIdentityCookies(response, identity);
  return response;
}
