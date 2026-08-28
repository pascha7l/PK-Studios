import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="leistungen" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-300/80">
            Leistungen
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Alles aus einer Hand – klar strukturiert.
          </h2>
          <p className="text-muted-foreground">
            Wir begleiten Marken vom Konzept bis zur Umsetzung und schaffen
            konsistente Erlebnisse über alle Touchpoints hinweg.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/60 bg-card/40 transition-colors hover:border-orange-400/30 hover:bg-card/70"
            >
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
