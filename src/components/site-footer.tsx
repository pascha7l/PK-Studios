import { Globe, Mail, Share2 } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: "https://github.com/PK-Studios", label: "GitHub", icon: Globe },
  { href: "https://instagram.com", label: "Instagram", icon: Share2 },
  { href: "mailto:hello@pk-studios.de", label: "E-Mail", icon: Mail },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-md space-y-3">
            <p className="text-lg font-semibold tracking-tight">PK-Studios</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Kreatives Studio für Brand Design, digitale Produkte und visuelle
              Kommunikation. Präzise umgesetzt, mutig gedacht.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PK-Studios. Alle Rechte vorbehalten.</p>
          <p>Berlin · Remote weltweit</p>
        </div>
      </div>
    </footer>
  );
}
