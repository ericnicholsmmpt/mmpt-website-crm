"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function sendBeacon(payload: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  const body = JSON.stringify(payload);
  const blob = new Blob([body], {
    type: "application/json",
  });

  if (typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon("/api/track", blob);
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}

export default function VisitTracker() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    sendBeacon({
      type: "page_view",
      path: pathname,
      referrer: document.referrer,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      ts: Date.now(),
    });
  }, [pathname]);

  return null;
}
