import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site, thirdPartyServices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${site.name}.`,
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="18. September 2026">
      <section className="space-y-3">
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          {site.legalName}, {site.address.street}, {site.address.zip}{" "}
          {site.address.city}. Kontakt:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Welche Daten wir verarbeiten</h2>
        <p>
          Wir erheben nur die Daten, die für den jeweiligen Zweck erforderlich
          sind – keine unnötigen Profil- oder Trackingdaten.
        </p>
        <ul>
          <li>
            <strong>Kontaktformular:</strong> Name, E-Mail-Adresse, Nachricht,
            Zeitstempel der Anfrage sowie die Bestätigung der Einwilligung und
            Altersangabe (16+).
          </li>
          <li>
            <strong>Technische Server-Logs</strong> (Hosting): IP-Adresse,
            Zeitpunkt, User-Agent – üblicherweise kurzfristig und zur
            Betriebssicherheit.
          </li>
          <li>
            <strong>Cookie-Einwilligung:</strong> Speicherung der Entscheidung
            lokal in deinem Browser (localStorage), kein serverseitiges Tracking.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>3. Zwecke & Rechtsgrundlagen</h2>
        <ul>
          <li>
            Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. b bzw. lit. a DSGVO)
          </li>
          <li>
            Betrieb und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO)
          </li>
          <li>
            Erfüllung rechtlicher Pflichten, z. B. Impressumspflicht (Art. 6 Abs.
            1 lit. c DSGVO)
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>4. Kinder & Jugendliche</h2>
        <p>
          Diese Website richtet sich nicht an Kinder unter 16 Jahren. Wir
          erheben wissentlich keine personenbezogenen Daten von Minderjährigen
          unter 16. Das Kontaktformular verlangt eine Altersbestätigung.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Drittanbieter & SDKs</h2>
        <p>Aktueller Stand unseres SDK-/Dienst-Audits:</p>
        <ul>
          {thirdPartyServices.map((service) => (
            <li key={service.name}>
              <strong>{service.name}:</strong> {service.purpose}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2>6. Speicherdauer</h2>
        <p>
          Kontaktanfragen speichern wir nur so lange, wie es für die Bearbeitung
          und etwaige Nachfragen erforderlich ist, längstens jedoch nach den
          gesetzlichen Aufbewahrungsfristen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
          Für eine Löschungsanfrage nutze bitte unser Formular unter{" "}
          <Link href="/datenloeschung">Datenlöschung</Link> oder schreib an{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. E-Mail-Kommunikation</h2>
        <p>
          Wenn wir dich per E-Mail kontaktieren, enthält jede Marketing- oder
          Newsletter-Nachricht einen klaren Abmeldelink (Unsubscribe).
          Transaktionsmails zu laufenden Projekten können aus rechtlichen oder
          vertraglichen Gründen weiterhin erforderlich sein.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Cookies</h2>
        <p>
          Details findest du in der{" "}
          <Link href="/cookies">Cookie-Richtlinie</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
