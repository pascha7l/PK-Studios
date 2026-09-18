"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "pk-cookie-consent";

type ConsentValue = "accepted" | "essential" | null;

function readConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "accepted" || value === "essential") return value;
  return null;
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  function save(value: Exclude<ConsentValue, null>) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }

  if (!ready || consent) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border/80 bg-card/95 p-5 shadow-[0_20px_60px_-28px_oklch(0.3_0.05_170/0.45)] backdrop-blur-xl sm:flex-row sm:items-end sm:gap-6 sm:p-6">
        <div className="space-y-2">
          <p id="cookie-title" className="font-display text-lg font-semibold tracking-tight">
            Cookies & Privatsphäre
          </p>
          <p id="cookie-desc" className="text-sm leading-relaxed text-muted-foreground">
            Wir setzen nur technisch notwendige Cookies ein – kein Tracking,
            keine Werbung. Details stehen in unserer{" "}
            <Link href="/cookies" className="underline underline-offset-2 hover:text-foreground">
              Cookie-Richtlinie
            </Link>{" "}
            und im{" "}
            <Link
              href="/datenschutz"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Datenschutz
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            className="h-10 px-4"
            onClick={() => save("essential")}
          >
            Nur notwendige
          </Button>
          <Button type="button" className="h-10 px-4" onClick={() => save("accepted")}>
            Verstanden
          </Button>
        </div>
      </div>
    </div>
  );
}
