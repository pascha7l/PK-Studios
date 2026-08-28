"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Alle");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Alle") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
            Portfolio
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ausgewählte Arbeiten
          </h2>
          <p className="text-muted-foreground">
            Eine Auswahl an Projekten aus Branding, Web, Product und Editorial
            Design – klick dich durch für mehr Details.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projekte/${project.slug}`}
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
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Keine Projekte in dieser Kategorie.
          </p>
        )}
      </div>
    </section>
  );
}
