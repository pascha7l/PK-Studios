import { Reveal } from "@/components/reveal";
import { aboutStats } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="ueber" className="border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <Reveal className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Über mich
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Atelier für klare Marken und digitale Produkte.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            PK-Studios ist ein unabhängiges Kreativstudio. Ich arbeite eng mit
            Teams zusammen – von der ersten Positionierung bis zur Umsetzung im
            Browser oder Print.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Keine Dark Patterns, keine aufgebauschten Versprechen: ehrliche
            Briefings, nachvollziehbare Meilensteine und ein Fokus auf das, was
            wirklich gebraucht wird.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {aboutStats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              className="border-l-2 border-primary/40 bg-transparent py-2 pl-5"
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
