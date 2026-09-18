import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "AGB",
  description: `Allgemeine Geschäftsbedingungen von ${site.name}.`,
};

export default function AgbPage() {
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen" updated="18. September 2026">
      <section className="space-y-3">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese AGB gelten für Design-, Beratungs- und Entwicklungsleistungen von{" "}
          {site.name} gegenüber Unternehmer:innen und Verbraucher:innen, soweit
          nicht individuell etwas anderes schriftlich vereinbart wurde.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Leistungen</h2>
        <p>
          Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder
          Briefing. Wir machen keine unbelegten Leistungsversprechen und keine
          Garantien für Umsatzsteigerungen oder Rankings.
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. Preise & Transparenz</h2>
        <p>
          Alle Preise werden vor Auftragserteilung klar kommuniziert. Es gibt
          keine versteckten Gebühren. Zusatzleistungen werden vorab
          abgestimmt und gesondert angeboten.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Mitwirkung</h2>
        <p>
          Du stellst rechtzeitig Inhalte, Zugänge und Freigaben bereit. Verzögerungen
          durch fehlende Mitwirkung können Termine verschieben.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Nutzungsrechte</h2>
        <p>
          Nach vollständiger Zahlung erhältst du die vereinbarten Nutzungsrechte
          an den freigegebenen Deliverables. Drittlizenzen (Schriften, Fotos,
          Software) bleiben beim jeweiligen Rechteinhaber – wir setzen nur
          lizensiertes Material ein und dokumentieren Quellen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Widerruf</h2>
        <p>
          Für Verbraucher:innen gilt zusätzlich die{" "}
          <Link href="/widerruf">Widerrufs- und Erstattungsrichtlinie</Link>.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Haftung</h2>
        <p>
          Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie
          bei Verletzung von Leben, Körper oder Gesundheit. Im Übrigen ist die
          Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Schlussbestimmungen</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
          Klauseln unwirksam sein, bleibt der Rest wirksam.
        </p>
      </section>
    </LegalPage>
  );
}
