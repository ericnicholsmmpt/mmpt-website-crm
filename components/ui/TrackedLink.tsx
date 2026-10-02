"use client";

import type { ReactNode } from "react";
import Link from "next/link";

type TrackedLinkProps = {
  href: string;
  intent: string;
  label: string;
  className?: string;
  children: ReactNode;
  variant?: "button" | "ghost";
};

function sendIntentEvent(intent: string, label: string) {
  const payload = JSON.stringify({
    type: "cta_click",
    intent,
    label,
    path: window.location.pathname,
  });

  if (typeof navigator === "undefined") {
    return;
  }

  const data = new Blob([payload], { type: "application/json" });
  if (typeof navigator.sendBeacon === "function") {
    navigator.sendBeacon("/api/track", data);
    return;
  }

  void fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}

export function TrackedLink({
  href,
  intent,
  label,
  className = "",
  children,
  variant = "button",
}: TrackedLinkProps) {
  const base = "brand-button focus-outline";
  const primary = "brand-button-primary";
  const ghost = "brand-button-ghost";
  const classes =
    variant === "ghost"
      ? `${base} ${ghost} ${className}`
      : `${base} ${primary} ${className}`;

  return (
    <Link
      href={href}
      onClick={() => sendIntentEvent(intent, label)}
      className={classes}
    >
      {children}
    </Link>
  );
}
