import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug, getProjectSlugs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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
    return { title: "Projekt nicht gefunden | PK-Studios" };
  }

  return {
    title: `${project.title} | PK-Studios`,
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
        <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center gap-6 px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold">Projekt nicht gefunden</h1>
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
      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
              project.gradient
            )}
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
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {project.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>
              </div>

              <aside className="rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
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
              <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
                Herausforderung
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {project.challenge}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
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
            <div className="flex flex-col gap-6 rounded-2xl border border-border/60 bg-card/40 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-lg font-medium">Interesse an einem ähnlichen Projekt?</p>
                <p className="text-sm text-muted-foreground">
                  Schreib uns – wir freuen uns auf deine Idee.
                </p>
              </div>
              <Button render={<Link href="/#kontakt" />} size="lg">
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
