import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Widerruf & Erstattung",
  description: `Widerrufsbelehrung und Erstattungsrichtlinie von ${site.name}.`,
};

export default function WiderrufPage() {
  return (
    <LegalPage title="Widerruf & Erstattung" updated="18. September 2026">
      <section className="space-y-3">
        <h2>Widerrufsrecht für Verbraucher:innen</h2>
        <p>
          Wenn du als Verbraucher:in einen Fernabsatzvertrag über digitale oder
          Beratungsleistungen schließt, kannst du innerhalb von 14 Tagen ohne
          Angabe von Gründen widerrufen – sofern gesetzlich vorgesehen und nicht
          ausdrücklich auf das Widerrufsrecht verzichtet wurde (z. B. bei sofort
          beginnender Dienstleistung mit Zustimmung).
        </p>
      </section>

      <section className="space-y-3">
        <h2>Widerrufsfrist</h2>
        <p>
          Die Frist beträgt 14 Tage ab Vertragsschluss. Zur Wahrung der Frist
          reicht die rechtzeitige Absendung an{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Folgen des Widerrufs</h2>
        <p>
          Wir erstatten alle Zahlungen, die wir von dir erhalten haben, unverzüglich
          und spätestens binnen 14 Tagen ab Eingang der Widerrufserklärung – ohne
          versteckte Abzüge außer gesetzlich zulässigen Wertersatz bei bereits
          erbrachten Leistungen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Erstattung bei Projektleistungen</h2>
        <ul>
          <li>
            Noch nicht begonnene Projekte: volle Erstattung bereits geleisteter
            Anzahlungen.
          </li>
          <li>
            Begonnene Projekte: Abrechnung der bis zum Widerruf erbrachten
            Stunden/Meilensteine – der Restbetrag wird erstattet. Keine
            „Hidden Fees“.
          </li>
          <li>
            Individuelle Sonderanfertigungen, die auf Wunsch vor Ablauf der
            Widerrufsfrist fertiggestellt wurden: ggf. Ausschluss nach § 356 Abs.
            4 BGB bei ausdrücklicher Zustimmung.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Muster-Widerrufsformular</h2>
        <p>
          An {site.legalName}, {site.address.street}, {site.address.zip}{" "}
          {site.address.city}, {site.email}:
        </p>
        <p>
          Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag
          über die folgende Leistung: … Bestellt am: … Name: … Adresse: …
          Datum / Unterschrift (nur bei Mitteilung auf Papier)
        </p>
      </section>
    </LegalPage>
  );
}
