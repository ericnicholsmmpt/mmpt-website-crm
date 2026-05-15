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
    "inline-flex items-center justify-center rounded-[0.8rem] px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-all focus-outline";
  const primary =
    "border border-red-500/45 bg-[linear-gradient(180deg,rgba(150,25,25,0.94),rgba(96,18,18,0.96))] text-white hover:border-red-400/70 hover:bg-[linear-gradient(180deg,rgba(168,30,30,0.94),rgba(112,20,20,0.96))]";
  const ghost =
    "border border-white/12 bg-white/[0.02] text-white hover:border-white/25 hover:bg-white/[0.05]";
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
