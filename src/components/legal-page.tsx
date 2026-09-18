import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Rechtliches
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Stand: {updated}
          </p>
          <div className="prose-legal mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/85 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
            {children}
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            <Link href="/" className="underline underline-offset-2 hover:text-foreground">
              Zurück zur Startseite
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
