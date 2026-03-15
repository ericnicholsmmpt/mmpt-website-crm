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
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all focus-outline";
  const primary =
    "border border-red-400/60 bg-[linear-gradient(180deg,rgba(185,28,28,0.98),rgba(127,29,29,0.96))] text-white hover:border-red-300 hover:shadow-[0_18px_44px_rgba(127,29,29,0.35)]";
  const ghost =
    "border border-white/15 bg-white/[0.03] text-white hover:border-red-400/60 hover:bg-red-950/30";
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
