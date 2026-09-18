"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site-data";

type Status = "idle" | "loading" | "success";

export default function DatenloeschungPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!privacyAccepted) {
      setError("Bitte bestätige die Hinweise zur Bearbeitung deiner Anfrage.");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Deine Rechte
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Datenlöschung anfordern
          </h1>
          <p className="mt-4 text-muted-foreground">
            Nach Art. 17 DSGVO kannst du die Löschung deiner bei uns
            gespeicherten personenbezogenen Daten verlangen. Wir melden uns in
            der Regel innerhalb von 14 Tagen.
          </p>

          <div className="mt-10 rounded-3xl border border-border/70 bg-card/70 p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
                <p className="font-display text-lg font-medium">Anfrage eingegangen</p>
                <p className="max-w-md text-sm text-muted-foreground">
                  Wir prüfen deine Anfrage und bestätigen die Löschung – oder
                  teilen dir mit, falls gesetzliche Aufbewahrungspflichten
                  entgegenstehen.
                </p>
                <Button render={<Link href="/" />} variant="outline">
                  Zur Startseite
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail-Adresse der betroffenen Daten
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@beispiel.de"
                    disabled={status === "loading"}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium">
                    Optionale Angaben
                  </label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="z. B. Kontaktanfrage vom … / Projektname"
                    className="min-h-28"
                    disabled={status === "loading"}
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-[var(--primary)]"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    required
                    disabled={status === "loading"}
                  />
                  <span>
                    Ich verstehe, dass wir die angegebenen Daten nur zur
                    Bearbeitung dieser Löschungsanfrage verarbeiten (
                    <Link href="/datenschutz" className="underline underline-offset-2">
                      Datenschutz
                    </Link>
                    ).
                  </span>
                </label>
                {error && (
                  <p role="alert" className="text-sm text-destructive">
                    {error}
                  </p>
                )}
                <Button type="submit" size="lg" className="h-11" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <LoaderCircle className="animate-spin" aria-hidden="true" />
                      Wird gesendet…
                    </>
                  ) : (
                    "Löschung anfordern"
                  )}
                </Button>
              </form>
            )}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Alternativ per E-Mail an{" "}
            <a href={`mailto:${site.email}?subject=Datenlöschung`} className="underline underline-offset-2">
              {site.email}
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
