import { Reveal } from "@/components/reveal";
import { expertise } from "@/lib/site-data";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Expertise
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Disziplinen, die ineinandergreifen
          </h2>
          <p className="text-muted-foreground">
            Strategie, Craft und Code – ohne unnötige Tools oder
            Drittanbieter-SDKs, die Daten abgreifen.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((skill, index) => (
            <Reveal
              key={skill}
              as="li"
              delay={(Math.min(index % 3, 2) + 1) as 1 | 2 | 3}
              className="group border-b border-border/70 py-4 transition-colors hover:border-primary/50"
            >
              <span className="font-display text-lg font-medium tracking-tight transition-colors group-hover:text-primary">
                {skill}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
