# PK-Studios

Website für **PK-Studios** – ein Kreativstudio für Brand Design, digitale Produkte und visuelle Kommunikation.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Lokal starten

```bash
npm install
npm run dev
```

Die App läuft standardmäßig unter [http://localhost:4317](http://localhost:4317).

## Projektstruktur

- `src/app/` – App Router, Layout und globale Styles
- `src/components/` – UI-Komponenten und Seitenabschnitte
- `src/lib/site-data.ts` – Inhalte für Leistungen, Projekte und Studio-Infos

## GitHub

Dieses Projekt ist für die Organisation **PK-Studios** auf GitHub vorgesehen.

Nach dem Erstellen des Repositories auf GitHub kannst du den Remote hinzufügen:

```bash
git remote add github git@github.com:PK-Studios/pk-studios.git
git push -u github main
```

Passe den Repository-Namen an, falls du einen anderen Namen verwendest.

## Anpassungen

- Inhalte: `src/lib/site-data.ts`
- Kontakt-E-Mail: `src/components/contact-section.tsx`
- Social Links: `src/components/site-footer.tsx`
