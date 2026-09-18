"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/site-data";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Alle");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Alle") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="border-b border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Ausgewählte Arbeiten
          </h2>
          <p className="text-muted-foreground">
            Kuratierte Cases aus Branding, Web, Product und Editorial – echte
            Projektgeschichten, keine erfundenen Bewertungen.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-8">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Projektkategorien"
          >
            {projectCategories.map((category) => (
              <Button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="h-9 rounded-full px-4"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              as="article"
            >
              <Link
                href={`/projekte/${project.slug}`}
                className="group relative block overflow-hidden rounded-3xl outline-none transition-transform duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, color-mix(in oklch, ${project.accent} 55%, white), color-mix(in oklch, ${project.accent} 25%, oklch(0.3 0.04 170)))`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 80%, oklch(0.95 0.02 210 / 0.4), transparent 40%)",
                    }}
                  />
                  <span className="sr-only">{project.imageAlt}</span>
                  <img
                    src={`data:image/svg+xml,${encodeURIComponent(projectPlaceholderSvg(project.title, project.accent))}`}
                    alt={project.imageAlt}
                    className="absolute inset-0 size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[oklch(0.18_0.03_170/0.75)] to-transparent p-6 pt-16 text-white">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge className="border-white/20 bg-white/15 text-white backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-white/30 bg-transparent text-white"
                      >
                        {project.year}
                      </Badge>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/75">{project.role}</p>
                      </div>
                      <ArrowUpRight
                        className="mt-1 size-5 shrink-0 text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </Link>
            </Reveal>
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

function projectPlaceholderSvg(title: string, accent: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#16352f" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <circle cx="620" cy="160" r="110" fill="white" fill-opacity="0.12"/>
  <rect x="80" y="360" width="280" height="160" rx="24" fill="white" fill-opacity="0.14"/>
  <text x="80" y="120" fill="white" fill-opacity="0.9" font-family="Georgia, serif" font-size="36">${title}</text>
</svg>`;
}
