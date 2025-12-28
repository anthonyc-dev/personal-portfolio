import { portfolioData } from "@/data/portfolio-data";
import { HeroSection } from "@/components/sections/hero-section";
import Skills from "@/components/sections/skills-section";
import {
  ScrollVelocitySection,
  LogoLoops,
  About,
  ContactSection,
} from "@/components/client-sections";
import Projects from "@/components/sections/projects-section";

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
        {/* <Projects /> */}
        <Projects projects={portfolioData.projects} />
        {/* <TimelineSection /> */}
        <ContactSection />
      </main>
    </>
  );
}
