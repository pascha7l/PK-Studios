import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 size-64 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8 lg:py-28">
        <div className="space-y-8">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Sparkles className="size-3.5" />
            Kreativstudio · Design & Development
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Ideen, die{" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-transparent">
                Marken sichtbar
              </span>{" "}
              machen.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              PK-Studios verbindet Strategie, Design und Technologie zu
              digitalen Erlebnissen, die wirken – von der ersten Skizze bis zum
              Launch.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#kontakt" />} size="lg" className="h-11 px-5">
              Projekt anfragen
              <ArrowRight />
            </Button>
            <Button
              render={<a href="#projekte" />}
              variant="outline"
              size="lg"
              className="h-11 px-5"
            >
              Arbeiten ansehen
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { label: "Fokus", value: "Brand & Digital" },
            { label: "Ansatz", value: "Strategie + Craft" },
            { label: "Tempo", value: "Klar & effizient" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
