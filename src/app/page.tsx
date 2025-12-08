import { portfolioData } from "@/data/portfolio-data";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import ScrollVelocitySection from "@/components/sections/ScrollVelocity-section";
import LogoLoops from "@/components/sections/LogoLoops";

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
        <AboutSection
          description={portfolioData.about.description}
          highlights={portfolioData.about.highlights}
        />
        <SkillsSection skills={portfolioData.skills} />
        <LogoLoops />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection
          description={portfolioData.contact.description}
          links={portfolioData.contact.links}
        />
      </main>
      <Footer />
    </>
  );
}
