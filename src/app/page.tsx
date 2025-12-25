import { portfolioData } from "@/data/portfolio-data";
import { HeroSection } from "@/components/sections/hero-section";
import Skills from "@/components/sections/skills-section";
import {
  ScrollVelocitySection,
  LogoLoops,
  About,
  ContactSection,
  Footer,
} from "@/components/client-sections";
import Projects from "@/components/project-card";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection
          name={portfolioData.hero.name}
          title={portfolioData.hero.title}
          subtitle={portfolioData.hero.subtitle}
        />
        <ScrollVelocitySection />

        <About />
        <Skills />
        <LogoLoops />
        <Projects />
        <ContactSection />
      </main>
    </>
  );
}
