import { studioStats } from "@/lib/site-data";

export function StudioSection() {
  return (
    <section id="studio" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
            Studio
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Klein genug für Nähe. Stark genug für Wirkung.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            PK-Studios ist ein unabhängiges Kreativstudio mit Fokus auf
            durchdachtes Design und saubere Umsetzung. Wir arbeiten eng mit
            Gründer:innen, Agenturen und Produktteams zusammen – transparent,
            iterativ und ergebnisorientiert.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Ob Rebranding, Website-Relaunch oder digitales Produkt: Wir liefern
            nicht nur schöne Oberflächen, sondern Systeme, die skalieren.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {studioStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-card/40 p-6"
            >
              <p className="text-3xl font-semibold tracking-tight text-orange-200">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
