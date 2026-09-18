import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { legalLinks, site } from "@/lib/site-data";

const socialLinks = [
  {
    href: "https://github.com/pascha7l/PK-Studios",
    label: "GitHub von PK-Studios",
    icon: Globe,
  },
  {
    href: "https://instagram.com",
    label: "Instagram von PK-Studios",
    icon: Share2,
  },
  {
    href: `mailto:${site.email}`,
    label: `E-Mail an ${site.email}`,
    icon: Mail,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-[oklch(0.94_0.012_210/0.7)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md space-y-4">
            <p className="font-display text-2xl font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.description} Transparente Konditionen, keine versteckten
              Kosten – Details zu Leistungen und Widerruf findest du in den
              rechtlichen Hinweisen.
            </p>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-2 hover:text-foreground hover:underline"
              >
                {site.email}
              </a>
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Rechtliches
              </p>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Kontakt
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{site.location}</li>
                <li>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="hover:text-foreground"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="pt-2">
                  <div className="flex items-center gap-2">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={label}
                        className="flex size-10 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <p>
            Schriften: Syne & Manrope (Google Fonts, OFL) · selbst gehostet via
            next/font
          </p>
        </div>
      </div>
    </footer>
  );
}
