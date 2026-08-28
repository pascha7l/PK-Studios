export const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#studio", label: "Studio" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const services = [
  {
    title: "Brand Design",
    description:
      "Markenidentitäten, die im Gedächtnis bleiben – von Logo bis Styleguide.",
    tags: ["Branding", "Visual Identity", "Guidelines"],
  },
  {
    title: "Digital Products",
    description:
      "Websites und Apps mit klarem Fokus auf Nutzerführung und Performance.",
    tags: ["Web", "UI/UX", "Prototyping"],
  },
  {
    title: "Content & Motion",
    description:
      "Visuelle Geschichten für Social, Kampagnen und Präsentationen.",
    tags: ["Motion", "Social", "Campaigns"],
  },
] as const;

export const projects = [
  {
    title: "Lumen Coffee",
    category: "Brand & Web",
    description: "Rebranding und E-Commerce für eine Specialty-Rösterei.",
    gradient: "from-amber-500/20 via-orange-400/10 to-transparent",
  },
  {
    title: "Atlas Mobility",
    category: "Product Design",
    description: "App-Design für ein urbanes Mobilitäts-Startup.",
    gradient: "from-sky-500/20 via-cyan-400/10 to-transparent",
  },
  {
    title: "Form & Field",
    category: "Editorial",
    description: "Editorial Design für ein Architektur-Magazin.",
    gradient: "from-violet-500/20 via-purple-400/10 to-transparent",
  },
  {
    title: "Northline Studio",
    category: "Web Experience",
    description: "Immersive Portfolio-Website für ein Fotografie-Studio.",
    gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
  },
] as const;

export const studioStats = [
  { value: "40+", label: "abgeschlossene Projekte" },
  { value: "12", label: "Branchen" },
  { value: "2019", label: "gegründet" },
] as const;
