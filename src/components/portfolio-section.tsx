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
  type Project,
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

        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
              as="article"
            >
              <ProjectCard project={project} />
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border/50 shadow-[0_24px_60px_-36px_rgba(20,53,47,0.45)] transition-transform duration-500 group-hover:-translate-y-1.5">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${project.accent} 0%, ${project.accentDeep} 100%)`,
          }}
        >
          <div
            className="absolute -right-10 -top-10 size-56 rounded-full opacity-40 blur-2xl transition-transform duration-700 group-hover:scale-125"
            style={{ background: "rgba(255,255,255,0.45)" }}
          />
          <div
            className="absolute bottom-10 left-8 size-40 rounded-[2rem] border border-white/25 bg-white/15 backdrop-blur-[2px] transition-transform duration-700 group-hover:translate-y-[-6px]"
          />
          <div
            className="absolute right-10 top-14 size-24 rounded-full border border-white/30 bg-white/20 transition-transform duration-700 group-hover:translate-x-2"
          />
          <img
            src={`data:image/svg+xml,${encodeURIComponent(projectArtSvg(project))}`}
            alt={project.imageAlt}
            className="absolute inset-0 size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
            width={800}
            height={600}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-6 pt-20 text-white">
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge className="border-white/25 bg-white/15 text-white backdrop-blur-sm">
                {project.category}
              </Badge>
              <Badge
                variant="outline"
                className="border-white/35 bg-transparent text-white"
              >
                {project.year}
              </Badge>
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/80">{project.role}</p>
              </div>
              <ArrowUpRight
                className="mt-1 size-5 shrink-0 text-white/85 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 px-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
    </Link>
  );
}

function projectArtSvg(project: Project) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${project.accent}"/>
      <stop offset="100%" stop-color="${project.accentDeep}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <circle cx="620" cy="150" r="120" fill="#ffffff" fill-opacity="0.18"/>
  <circle cx="680" cy="210" r="54" fill="#ffffff" fill-opacity="0.12"/>
  <rect x="70" y="340" width="300" height="170" rx="28" fill="#ffffff" fill-opacity="0.16"/>
  <rect x="110" y="390" width="170" height="10" rx="5" fill="#ffffff" fill-opacity="0.45"/>
  <rect x="110" y="420" width="220" height="8" rx="4" fill="#ffffff" fill-opacity="0.28"/>
  <rect x="110" y="448" width="140" height="8" rx="4" fill="#ffffff" fill-opacity="0.2"/>
</svg>`;
}
