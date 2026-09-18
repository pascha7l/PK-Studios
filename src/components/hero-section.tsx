import { ArrowRight } from "lucide-react";

import { HeroVisual } from "@/components/hero-visual";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(92vh,880px)] overflow-hidden border-b border-border/70">
      <HeroVisual />

      <div className="relative mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-2xl space-y-7">
          <p className="animate-fade-up font-display text-5xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
            {site.name}
          </p>

          <h1 className="animate-fade-up-delay-1 max-w-xl text-2xl font-medium leading-snug tracking-tight text-balance text-foreground/90 sm:text-3xl">
            Marken und digitale Produkte mit klarer Haltung.
          </h1>

          <p className="animate-fade-up-delay-2 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.description}
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#portfolio" />}
              size="lg"
              className="h-12 px-6 text-base"
            >
              Portfolio ansehen
              <ArrowRight />
            </Button>
            <Button
              render={<a href="#kontakt" />}
              variant="outline"
              size="lg"
              className="h-12 border-foreground/15 bg-background/50 px-6 text-base backdrop-blur-sm"
            >
              Projekt anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
