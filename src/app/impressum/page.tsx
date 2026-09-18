import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${site.name}.`,
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" updated="18. September 2026">
      <section className="space-y-3">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          {site.legalName}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
          <br />
          {site.address.country}
        </p>
        <p>{site.owner}</p>
      </section>

      <section className="space-y-3">
        <h2>Kontakt</h2>
        <p>
          Telefon: {site.phone}
          <br />
          E-Mail:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>

      <section className="space-y-3">
        <h2>Umsatzsteuer</h2>
        <p>{site.vatId}</p>
      </section>

      <section className="space-y-3">
        <h2>Verantwortlich für den Inhalt</h2>
        <p>{site.responsible}</p>
      </section>

      <section className="space-y-3">
        <h2>Hinweis</h2>
        <p>
          Die oben genannten Firmendaten sind Platzhalter und müssen vor dem
          produktiven Einsatz durch die tatsächlichen Geschäftsangaben ersetzt
          werden.
        </p>
      </section>
    </LegalPage>
  );
}
