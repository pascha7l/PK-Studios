export const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#ueber", label: "Über mich" },
  { href: "#expertise", label: "Expertise" },
  { href: "#kontakt", label: "Kontakt" },
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
  gradient: string;
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
    gradient: "from-amber-500/20 via-orange-400/10 to-transparent",
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
    gradient: "from-sky-500/20 via-cyan-400/10 to-transparent",
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
    gradient: "from-violet-500/20 via-purple-400/10 to-transparent",
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
    gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
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
  { value: "40+", label: "Projekte" },
  { value: "12", label: "Branchen" },
  { value: "2019", label: "seit" },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
