export const site = {
  name: "PK-Studios",
  legalName: "PK-Studios",
  tagline: "Brand, Web & Product Design",
  description:
    "Unabhängiges Kreativstudio für Brand Design, digitale Produkte und visuelle Kommunikation.",
  email: "hello@pk-studios.de",
  phone: "+49 (0) 30 00000000",
  address: {
    street: "Musterstraße 12",
    zip: "10115",
    city: "Berlin",
    country: "Deutschland",
  },
  owner: "Inhaber:in (Platzhalter – bitte aktualisieren)",
  vatId: "USt-IdNr. DE000000000",
  responsible: "Verantwortlich gemäß § 18 Abs. 2 MStV: Inhaber:in, Anschrift wie oben",
  location: "Berlin · Remote weltweit",
} as const;

export const navLinks = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#ueber", label: "Über mich" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
  { href: "/widerruf", label: "Widerruf & Erstattung" },
  { href: "/cookies", label: "Cookie-Richtlinie" },
  { href: "/datenloeschung", label: "Datenlöschung" },
] as const;

export type ProjectCategory =
  | "Alle"
  | "Branding"
  | "Web"
  | "Product"
  | "Editorial";

export const projectCategories: ProjectCategory[] = [
  "Alle",
  "Branding",
  "Web",
  "Product",
  "Editorial",
];

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "Alle">;
  year: string;
  role: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: readonly string[];
  tags: readonly string[];
  accent: string;
  imageAlt: string;
};

export const projects: readonly Project[] = [
  {
    slug: "lumen-coffee",
    title: "Lumen Coffee",
    category: "Branding",
    year: "2025",
    role: "Brand & Web Design",
    description: "Rebranding und E-Commerce für eine Specialty-Rösterei.",
    overview:
      "Lumen Coffee wollte als moderne Rösterei wahrgenommen werden – weg vom generischen Café-Look, hin zu einer warmen, präzisen Markenwelt.",
    challenge:
      "Die bestehende Marke wirkte austauschbar und spiegelte die Qualität der Bohnen nicht wider. Online fehlte ein klarer Einkaufsflow.",
    solution:
      "Wir entwickelten eine reduzierte Identität mit typografischer Klarheit, warmen Farbtönen und einem schlanken Shop-Erlebnis.",
    deliverables: ["Logo & Brand System", "Packaging", "E-Commerce UI", "Styleguide"],
    tags: ["Branding", "E-Commerce", "UI Design"],
    accent: "var(--project-lumen)",
    imageAlt:
      "Abstrakte Markendarstellung für Lumen Coffee mit warmen Bernstein- und Kaffee-Tönen",
  },
  {
    slug: "atlas-mobility",
    title: "Atlas Mobility",
    category: "Product",
    year: "2024",
    role: "Product Design",
    description: "App-Design für ein urbanes Mobilitäts-Startup.",
    overview:
      "Atlas verbindet ÖPNV, Bike-Sharing und Ride-Hailing in einer App – die Herausforderung lag in der Übersichtlichkeit komplexer Routen.",
    challenge:
      "Nutzer:innen verloren sich in zu vielen Optionen. Das Interface musste schnell entscheidbar und visuell ruhig bleiben.",
    solution:
      "Ein modulares UI-System mit klarer Hierarchie, Fokus auf den nächsten Schritt und konsistenten Komponenten für alle Mobilitätsarten.",
    deliverables: ["UX Flows", "Design System", "App Screens", "Prototyp"],
    tags: ["UX", "Mobile", "Design System"],
    accent: "var(--project-atlas)",
    imageAlt:
      "Abstrakte Produktdarstellung für Atlas Mobility mit kühlen Cyan- und Himmelblau-Flächen",
  },
  {
    slug: "form-and-field",
    title: "Form & Field",
    category: "Editorial",
    year: "2024",
    role: "Art Direction",
    description: "Editorial Design für ein Architektur-Magazin.",
    overview:
      "Form & Field ist ein Print- und Digital-Magazin über zeitgenössische Architektur – Layout und Typografie tragen die Story.",
    challenge:
      "Starke Bildwelten und lange Texte mussten ohne visuelle Überladung nebeneinander funktionieren.",
    solution:
      "Ein flexibles Raster mit großzügigem Weißraum, einer markanten Display-Schrift und klaren Kapitelrhythmen.",
    deliverables: ["Layout System", "Typografie", "Cover Serien", "Digital Edition"],
    tags: ["Editorial", "Print", "Typography"],
    accent: "var(--project-form)",
    imageAlt:
      "Abstrakte Editorial-Darstellung für Form & Field mit tiefen Oliv- und Schieferflächen",
  },
  {
    slug: "northline-studio",
    title: "Northline Studio",
    category: "Web",
    year: "2023",
    role: "Web Design & Development",
    description: "Immersive Portfolio-Website für ein Fotografie-Studio.",
    overview:
      "Northline wollte Arbeiten in voller Wirkung zeigen – ohne die Seite langsam oder überladen wirken zu lassen.",
    challenge:
      "Große Bildformate, schnelle Ladezeiten und ein eleganter Auftritt mussten zusammenpassen.",
    solution:
      "Eine bildgetriebene One-Page mit lazy Loading, dezenten Scroll-Animationen und einem CMS-freundlichen Aufbau.",
    deliverables: ["Website", "Motion", "Responsive Layout", "Performance Setup"],
    tags: ["Web", "Portfolio", "Frontend"],
    accent: "var(--project-northline)",
    imageAlt:
      "Abstrakte Webdarstellung für Northline Studio mit Smaragd- und Teal-Flächen",
  },
] as const;

export const expertise = [
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
  "Design Systems",
  "Editorial Design",
  "Prototyping",
  "Art Direction",
  "Motion Design",
] as const;

export const aboutStats = [
  { value: "40+", label: "kuratierte Projekte" },
  { value: "12", label: "Branchen" },
  { value: "2019", label: "seit" },
] as const;

export const thirdPartyServices = [
  {
    name: "Keine Analytics- oder Tracking-SDKs",
    purpose:
      "Die Website läuft ohne Google Analytics, Meta Pixel oder vergleichbare Tracking-Bibliotheken.",
  },
  {
    name: "Hosting (Vercel)",
    purpose:
      "Technische Auslieferung der Website. Server-Logs können IP-Adressen und User-Agent kurzzeitig enthalten.",
  },
  {
    name: "Schriftarten (Google Fonts via next/font)",
    purpose:
      "Syne und Manrope werden selbst gehostet und beim Build eingebettet – kein Laufzeit-Request an Google.",
  },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
