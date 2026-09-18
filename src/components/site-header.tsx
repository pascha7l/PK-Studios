"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-base font-semibold tracking-tight sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground transition-transform group-hover:scale-105"
          >
            PK
          </span>
          <span>
            {site.name}
            <span className="text-primary">.</span>
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button render={<a href="/#kontakt" />} size="lg" className="h-10 px-4">
            Kontakt
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border/50 transition-[max-height,opacity] duration-300 md:hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav
          aria-label="Mobile Navigation"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="/#kontakt" />}
            className="mt-2 w-full"
            size="lg"
            onClick={() => setMobileOpen(false)}
          >
            Kontakt
          </Button>
        </nav>
      </div>
    </header>
  );
}
