import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug, getProjectSlugs } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projekt nicht gefunden" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <SiteHeader />
        <main
          id="main-content"
          className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-6 px-4 py-20 sm:px-6 lg:px-8"
        >
          <h1 className="font-display text-3xl font-semibold">
            Projekt nicht gefunden
          </h1>
          <Button render={<Link href="/#portfolio" />} variant="outline">
            <ArrowLeft />
            Zurück zum Portfolio
          </Button>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, color-mix(in oklch, ${project.accent} 45%, white), color-mix(in oklch, ${project.accent} 20%, oklch(0.94 0.01 210)))`,
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <Button
              render={<Link href="/#portfolio" />}
              variant="ghost"
              size="sm"
              className="mb-8 -ml-2"
            >
              <ArrowLeft />
              Portfolio
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge variant="outline">{project.year}</Badge>
                </div>
                <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
                <img
                  src={`data:image/svg+xml,${encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="640" viewBox="0 0 1200 640"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="white" stop-opacity="0.35"/><stop offset="100%" stop-color="#0f2f2a" stop-opacity="0.25"/></linearGradient></defs><rect width="1200" height="640" rx="32" fill="url(#g)"/><circle cx="920" cy="180" r="140" fill="white" fill-opacity="0.2"/><rect x="120" y="360" width="420" height="160" rx="28" fill="white" fill-opacity="0.18"/></svg>`
                  )}`}
                  alt={project.imageAlt}
                  className="mt-4 w-full rounded-3xl border border-border/40 object-cover shadow-sm"
                  width={1200}
                  height={640}
                />
              </div>

              <aside className="rounded-3xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm">
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Rolle</dt>
                    <dd className="mt-1 font-medium">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Jahr</dt>
                    <dd className="mt-1 font-medium">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Deliverables</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.deliverables.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Herausforderung
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Lösung
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-card/60 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="font-display text-lg font-medium">
                  Interesse an einem ähnlichen Projekt?
                </p>
                <p className="text-sm text-muted-foreground">
                  Transparente Konditionen – ohne versteckte Kosten.
                </p>
              </div>
              <Button render={<Link href="/#kontakt" />} size="lg" className="h-11 px-5">
                Kontakt aufnehmen
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
