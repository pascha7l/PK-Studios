import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
