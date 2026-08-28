import { Badge } from "@/components/ui/badge";
import { expertise } from "@/lib/site-data";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
            Expertise
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Womit ich arbeite
          </h2>
          <p className="text-muted-foreground">
            Von der ersten Idee bis zur Umsetzung – diese Disziplinen fließen
            in meine Portfolio-Projekte ein.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {expertise.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
