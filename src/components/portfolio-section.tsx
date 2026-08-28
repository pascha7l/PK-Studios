import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  return (
    <section id="projekte" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
              Projekte
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-muted-foreground">
              Ein Einblick in Projekte, bei denen Design und Umsetzung Hand in
              Hand gehen.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Case Studies folgen bald</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-orange-400/30 hover:bg-card/70"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity group-hover:opacity-100",
                  project.gradient
                )}
              />
              <div className="relative space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="secondary">{project.category}</Badge>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
