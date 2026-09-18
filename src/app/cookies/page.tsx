import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: `Cookie-Richtlinie von ${site.name}.`,
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie-Richtlinie" updated="18. September 2026">
      <section className="space-y-3">
        <h2>Was sind Cookies?</h2>
        <p>
          Cookies und ähnliche Technologien speichern Informationen in deinem
          Browser. Wir nutzen sie sparsam und ohne Tracking zu Werbezwecken.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Welche Technologien wir einsetzen</h2>
        <ul>
          <li>
            <strong>Consent-Status (localStorage):</strong> Speichert deine
            Entscheidung im Cookie-Banner (`pk-cookie-consent`). Technisch
            notwendig, um die Wahl zu merken. Speicherdauer: bis du sie löschst
            oder zurücksetzt.
          </li>
          <li>
            <strong>Keine Marketing-Cookies,</strong> keine Social-Media-Pixel,
            keine Analytics-Cookies.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2>Einwilligung</h2>
        <p>
          Beim ersten Besuch erscheint ein Cookie-Banner. Du kannst „Nur
          notwendige“ wählen oder „Verstanden“ bestätigen. Die Wahl ist jederzeit
          über die Browser-Einstellungen bzw. durch Löschen des localStorage
          zurücksetzbar.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Weitere Informationen</h2>
        <p>
          Mehr zur Datenverarbeitung steht in der{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link>. Fragen an{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
