import type { NextRequest, NextResponse } from "next/server";

const VISITOR_COOKIE = "mmpt_vid";
const SESSION_COOKIE = "mmpt_sid";
const VISITOR_MAX_AGE = 60 * 60 * 24 * 180;
const SESSION_MAX_AGE = 60 * 30;

type Identity = {
  visitorId: string;
  sessionId: string;
};

type Attribution = {
  currentUrl: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

type VisitorRecord = {
  id: string;
  first_seen_at: string;
  last_seen_at: string;
  first_path: string;
  first_referrer: string;
  user_agent: string;
};

type SessionRecord = {
  id: string;
  visitor_id: string;
  started_at: string;
  last_seen_at: string;
  landing_path: string;
  landing_referrer: string;
  user_agent: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
};

function safeUrl(input: string) {
  try {
    return new URL(input);
  } catch {
    return null;
  }
}

function env() {
  return {
    url: process.env.SUPABASE_URL || "",
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  };
}

export function hasWebsiteDataStore() {
  const { url, serviceKey } = env();
  return Boolean(url && serviceKey);
}

export function sanitizeText(input: unknown, maxLength = 600) {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, maxLength);
}

export function getIdentity(request: NextRequest) {
  const existingVisitorId = sanitizeText(
    request.cookies.get(VISITOR_COOKIE)?.value,
    120
  );
  const existingSessionId = sanitizeText(
    request.cookies.get(SESSION_COOKIE)?.value,
    120
  );

  const visitorId = existingVisitorId || crypto.randomUUID();
  const sessionId = existingSessionId || crypto.randomUUID();

  return {
    visitorId,
    sessionId,
    isNewVisitor: !existingVisitorId,
    isNewSession: !existingSessionId,
  };
}

export function applyIdentityCookies(response: NextResponse, identity: Identity) {
  const secure = process.env.NODE_ENV === "production";

  response.cookies.set({
    name: VISITOR_COOKIE,
    value: identity.visitorId,
    maxAge: VISITOR_MAX_AGE,
    sameSite: "lax",
    secure,
    httpOnly: true,
    path: "/",
  });

  response.cookies.set({
    name: SESSION_COOKIE,
    value: identity.sessionId,
    maxAge: SESSION_MAX_AGE,
    sameSite: "lax",
    secure,
    httpOnly: true,
    path: "/",
  });
}

export function getClientIp(request: NextRequest) {
  const forwarded = sanitizeText(request.headers.get("x-forwarded-for"), 300);
  if (!forwarded) return "";
  return forwarded.split(",")[0]?.trim() || "";
}

export function getAttribution(request: NextRequest) {
  const currentUrl = sanitizeText(request.headers.get("referer"), 1000);
  const parsed = safeUrl(currentUrl);

  return {
    currentUrl,
    utmSource: parsed?.searchParams.get("utm_source") || "",
    utmMedium: parsed?.searchParams.get("utm_medium") || "",
    utmCampaign: parsed?.searchParams.get("utm_campaign") || "",
    utmTerm: parsed?.searchParams.get("utm_term") || "",
    utmContent: parsed?.searchParams.get("utm_content") || "",
  } satisfies Attribution;
}

function toIso(ts: number) {
  return new Date(ts).toISOString();
}

async function supabaseWrite(
  table: string,
  rows: Record<string, unknown> | Record<string, unknown>[],
  options?: {
    upsert?: boolean;
    onConflict?: string;
  }
) {
  const { url, serviceKey } = env();

  if (!url || !serviceKey) {
    return { ok: false as const, skipped: true as const };
  }

  const query = options?.onConflict
    ? `?on_conflict=${encodeURIComponent(options.onConflict)}`
    : "";

  const response = await fetch(`${url}/rest/v1/${table}${query}`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: options?.upsert ? "resolution=merge-duplicates" : "return=minimal",
    },
    body: JSON.stringify(rows),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(
      `Supabase write failed for ${table}: ${response.status} ${details}`
    );
  }

  return { ok: true as const, skipped: false as const };
}

async function supabasePatch(
  table: string,
  matchColumn: string,
  matchValue: string,
  row: Record<string, unknown>
) {
  const { url, serviceKey } = env();

  if (!url || !serviceKey) {
    return { ok: false as const, skipped: true as const };
  }

  const response = await fetch(
    `${url}/rest/v1/${table}?${encodeURIComponent(matchColumn)}=eq.${encodeURIComponent(
      matchValue
    )}`,
    {
      method: "PATCH",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(
      `Supabase patch failed for ${table}: ${response.status} ${details}`
    );
  }

  return { ok: true as const, skipped: false as const };
}

export async function persistWebsiteIdentity(options: {
  request: NextRequest;
  path: string;
  referrer: string;
  userAgent: string;
  timestamp: number;
  identity: ReturnType<typeof getIdentity>;
}) {
  const { request, path, referrer, userAgent, timestamp, identity } = options;

  if (!hasWebsiteDataStore()) {
    return { storage: "console" as const };
  }

  const attribution = getAttribution(request);
  const iso = toIso(timestamp);

  const visitor: VisitorRecord = {
    id: identity.visitorId,
    first_seen_at: iso,
    last_seen_at: iso,
    first_path: path,
    first_referrer: referrer,
    user_agent: userAgent,
  };

  const session: SessionRecord = {
    id: identity.sessionId,
    visitor_id: identity.visitorId,
    started_at: iso,
    last_seen_at: iso,
    landing_path: path,
    landing_referrer: referrer,
    user_agent: userAgent,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_term: attribution.utmTerm,
    utm_content: attribution.utmContent,
  };

  if (identity.isNewVisitor) {
    await supabaseWrite("website_visitors", visitor);
  } else {
    await supabasePatch("website_visitors", "id", identity.visitorId, {
      last_seen_at: iso,
      user_agent: userAgent,
    });
  }

  if (identity.isNewSession) {
    await supabaseWrite("website_sessions", session);
  } else {
    await supabasePatch("website_sessions", "id", identity.sessionId, {
      last_seen_at: iso,
      user_agent: userAgent,
    });
  }

  return { storage: "supabase" as const };
}

export async function insertWebsiteEvent(
  payload: Record<string, unknown> & { occurred_at: string }
) {
  if (!hasWebsiteDataStore()) {
    console.info("[mmpt_track_store_fallback]", JSON.stringify(payload));
    return { storage: "console" as const };
  }

  await supabaseWrite("website_events", payload);
  return { storage: "supabase" as const };
}

export async function insertWebsiteLead(
  payload: Record<string, unknown> & { submitted_at: string }
) {
  if (!hasWebsiteDataStore()) {
    console.info("[mmpt_lead_store_fallback]", JSON.stringify(payload));
    return { storage: "console" as const };
  }

  await supabaseWrite("website_leads", payload);
  return { storage: "supabase" as const };
}
