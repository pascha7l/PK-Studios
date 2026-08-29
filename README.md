# PK-Studios

Website für **PK-Studios** – ein Portfolio für Brand Design, digitale Produkte und visuelle Kommunikation.

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

Repository: [pascha7l/PK-Studios](https://github.com/pascha7l/PK-Studios)

## Deploy (Vercel)

Live: [https://pk-studios.vercel.app](https://pk-studios.vercel.app)

Pushes auf `main` deployen automatisch nach Vercel (GitHub Actions).

Manuell:

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Anpassungen

- Inhalte: `src/lib/site-data.ts`
- Kontakt-E-Mail: `src/components/contact-section.tsx`
- Social Links: `src/components/site-footer.tsx`
