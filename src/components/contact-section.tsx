"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Mail, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  return (
    <section id="kontakt" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
              Kontakt
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Lass uns über dein nächstes Projekt sprechen.
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Schick uns eine kurze Nachricht – wir melden uns in der Regel
              innerhalb von 1–2 Werktagen.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="size-4 shrink-0 text-orange-300/80" />
              <a
                href="mailto:hello@pk-studios.de"
                className="transition-colors hover:text-foreground"
              >
                hello@pk-studios.de
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-orange-300/80" />
              <span>Berlin · Remote weltweit</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
              <CheckCircle2 className="size-10 text-orange-300" />
              <div className="space-y-2">
                <p className="text-lg font-medium">Nachricht gesendet</p>
                <p className="text-sm text-muted-foreground">
                  Danke für deine Anfrage. Wir melden uns bald bei dir.
                </p>
              </div>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                Neue Nachricht
              </Button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Dein Name"
                    required
                    disabled={status === "loading"}
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
                    placeholder="name@beispiel.de"
                    required
                    disabled={status === "loading"}
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
                  placeholder="Erzähl uns kurz von deinem Projekt..."
                  className="min-h-32"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-11 w-full sm:w-auto"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  "Anfrage senden"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
