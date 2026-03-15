"use client";

import { useEffect, useState } from "react";

type VideoModalButtonProps = {
  label: string;
  title: string;
  videoId: string;
  className?: string;
};

export default function VideoModalButton({
  label,
  title,
  videoId,
  className = "",
}: VideoModalButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-4 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.12em] text-white transition hover:border-red-400/60 hover:bg-red-950/30 focus-outline ${className}`}
      >
        {label}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-[1.75rem] border border-white/10 bg-black p-4 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="kicker">Athlete Assessment</p>
                <h3 className="mt-2 text-xl font-semibold heading sm:text-2xl">{title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-xl text-white transition hover:border-white/30 hover:bg-white/[0.06] focus-outline"
                aria-label="Close video"
              >
                ×
              </button>
            </div>

            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
              <div className="aspect-[9/16] max-h-[75vh] w-full sm:aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
