"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Mail, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site-data";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!privacyAccepted || !ageConfirmed) {
      setFormError(
        "Bitte bestätige die Datenschutzhinweise und, dass du mindestens 16 Jahre alt bist."
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setFormError("Bitte fülle nur die notwendigen Felder aus.");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setPrivacyAccepted(false);
    setAgeConfirmed(false);
  }

  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Kontakt
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Lass uns über dein nächstes Projekt sprechen.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Wir erheben nur Name, E-Mail und deine Nachricht – nichts
              Unnötiges. Antwort in der Regel innerhalb von 1–2 Werktagen.
              Kostenlose Erstberatung ohne versteckte Gebühren.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{site.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="rounded-3xl border border-border/70 bg-card/70 p-6 shadow-[0_30px_80px_-48px_oklch(0.3_0.05_170/0.55)] backdrop-blur-sm sm:p-8">
            {status === "success" ? (
              <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
                <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
                <div className="space-y-2">
                  <p className="font-display text-lg font-medium">Nachricht gesendet</p>
                  <p className="text-sm text-muted-foreground">
                    Danke für deine Anfrage. Wir melden uns bald – und du kannst
                    jederzeit eine{" "}
                    <Link href="/datenloeschung" className="underline underline-offset-2">
                      Datenlöschung
                    </Link>{" "}
                    verlangen.
                  </p>
                </div>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Neue Nachricht
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Dein Name"
                      required
                      disabled={status === "loading"}
                      className="h-11 bg-background/80"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-Mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@beispiel.de"
                      required
                      disabled={status === "loading"}
                      className="h-11 bg-background/80"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Erzähl kurz von deinem Projekt…"
                    className="min-h-32 bg-background/80"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <fieldset className="space-y-3 rounded-2xl border border-border/60 bg-muted/40 p-4">
                  <legend className="px-1 text-sm font-medium">Einwilligungen</legend>
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
                      Ich habe die{" "}
                      <Link
                        href="/datenschutz"
                        className="text-foreground underline underline-offset-2"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und willige in die Verarbeitung meiner Angaben zur
                      Bearbeitung der Anfrage ein.
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-1 size-4 accent-[var(--primary)]"
                      checked={ageConfirmed}
                      onChange={(e) => setAgeConfirmed(e.target.checked)}
                      required
                      disabled={status === "loading"}
                    />
                    <span>
                      Ich bestätige, dass ich mindestens 16 Jahre alt bin. Wir
                      erheben keine Daten von Kindern unter 16 Jahren.
                    </span>
                  </label>
                </fieldset>

                {formError && (
                  <p role="alert" className="text-sm text-destructive">
                    {formError}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="h-11 w-full sm:w-auto"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <LoaderCircle className="animate-spin" aria-hidden="true" />
                      Wird gesendet…
                    </>
                  ) : (
                    "Anfrage senden"
                  )}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
