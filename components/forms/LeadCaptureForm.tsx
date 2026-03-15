"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { TrackedLink } from "../ui/TrackedLink";

type FormStatus = "idle" | "sending" | "sent" | "error";

const interests = [
  "Sports Medicine Physical Therapy",
  "Athlete Assessment",
  "Arm Care / Rehabilitation",
  "Movement Correction",
  "Team / Travel Athlete Support",
];

const nextStepPoints = [
  "Pain, injury history, or performance bottlenecks",
  "Sport demands, training volume, and current workload",
  "Need for athlete assessment, Sports PT, or precision arm care",
  "Best-fit next step for support, scheduling, and follow-up",
];

type LeadCaptureFormProps = {
  source?: string;
};

export default function LeadCaptureForm({
  source = "lead_capture_form",
}: LeadCaptureFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function submitLead(formData: FormData) {
    const selectedInterests = formData.getAll("interests").map(String);

    const payload = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      goal: String(formData.get("goal") || ""),
      interests: selectedInterests,
      source,
    };

    setStatus("sending");
    setMessage("");

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(result?.error ?? "Unable to submit lead.");
    }

    setStatus("sent");
    setMessage(
      result?.message ??
        "Your request has been submitted. MMPT will review it and reach out with next steps soon."
    );
    formRef.current?.reset();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      await submitLead(formData);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unexpected issue submitting. Please try again."
      );
    }
  }

  const disabled = status === "sending";

  return (
    <section id="book" className="section-shell rounded-3xl p-5 card sm:p-8">
      <p className="kicker">Book with context</p>
      <h2 className="mt-2 text-2xl font-bold heading sm:text-3xl">
        Tell us what you need, and we will help guide the right next step.
      </h2>
      <p className="mt-3 text-sm text-zinc-300 sm:text-base">
        Share what you are working through, what you are aiming for, and where you need help. Our team can use that context to point you toward the right service or plan.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/60 p-4 sm:p-5"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1 text-sm text-zinc-200">
              First Name
              <input
                name="firstName"
                required
                placeholder="First name"
                className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                autoComplete="given-name"
              />
            </label>
            <label className="grid gap-1 text-sm text-zinc-200">
              Last Name
              <input
                name="lastName"
                required
                placeholder="Last name"
                className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                autoComplete="family-name"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1 text-sm text-zinc-200">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@athletemail.com"
                className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                autoComplete="email"
              />
            </label>
            <label className="grid gap-1 text-sm text-zinc-200">
              Phone
              <input
                name="phone"
                type="tel"
                required
                placeholder="(555) 555-1234"
                className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                autoComplete="tel"
              />
            </label>
          </div>

          <label className="grid gap-1 text-sm text-zinc-200">
            Immediate Goal
            <textarea
              name="goal"
              required
              rows={4}
              maxLength={700}
              placeholder="Describe the pain point, performance issue, or timeline you want help with."
              className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            />
          </label>

          <fieldset className="grid gap-3">
            <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-200">
              Most interested in
            </legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-3 text-sm"
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    className="mt-1 accent-red-500"
                  />
                  <span className="text-zinc-300">{interest}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {message && (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                status === "error"
                  ? "border-rose-400/40 bg-rose-500/10 text-rose-200"
                  : "border-emerald-400/35 bg-emerald-500/10 text-emerald-200"
              }`}
            >
              {message}
            </div>
          )}

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={disabled}
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-red-400/60 bg-[linear-gradient(180deg,rgba(185,28,28,0.98),rgba(127,29,29,0.96))] px-4 py-0 text-[0.66rem] font-semibold uppercase leading-none tracking-[0.12em] text-white transition hover:border-red-300 hover:shadow-[0_18px_44px_rgba(127,29,29,0.35)] focus-outline disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {disabled ? "Submitting priorities..." : "Get best-fit recommendation"}
            </button>

            <TrackedLink
              href="https://movementmedicinellc.janeapp.com/?utm_source=mmpt&utm_medium=lead_form&utm_campaign=assessment"
              intent="direct_booking"
              label="Book Assessment"
              variant="ghost"
              className="h-10 w-full px-4 py-0 text-[0.66rem] leading-none tracking-[0.12em] sm:w-auto"
            >
              Book Assessment Directly
            </TrackedLink>
          </div>
        </form>

        <aside className="rounded-[1.75rem] border border-white/10 bg-black/60 p-4 sm:p-5">
          <div className="pill pill-active px-4 py-2">Start with your goal</div>
          <h3 className="mt-4 text-xl font-semibold heading sm:text-2xl">
            The more context you share, the better we can guide the process.
          </h3>
          <p className="mt-3 text-sm text-zinc-300">
            This helps us understand what you are dealing with, what support you may need, and how to point you toward the best-fit next step.
          </p>

          <div className="mt-5 grid gap-3">
            {nextStepPoints.map((signal, index) => (
              <div
                key={signal}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
                  Focus 0{index + 1}
                </p>
                <p className="mt-2 text-sm text-zinc-200">{signal}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

    </section>
  );
}
