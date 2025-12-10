import { portfolioData } from "@/data/portfolio-data";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import dynamic from "next/dynamic";
import {
  ScrollVelocitySection,
  LogoLoops,
  Chatbot,
} from "@/components/client-sections";

// Lazy load components below the fold for better initial load performance
const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  { ssr: true }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then((mod) => ({
      default: mod.ContactSection,
    })),
  { ssr: true }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => ({ default: mod.Footer })),
  { ssr: true }
);

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
      <Chatbot />
    </>
  );
}
