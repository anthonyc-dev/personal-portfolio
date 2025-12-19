"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { ProjectDetailsBottomSheet } from "@/components/project-details-bottom-sheet";
import { Project } from "@/types/portfolio";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsSectionProps {
  readonly projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    // Delay clearing selected project to allow exit animation to complete
    setTimeout(() => setSelectedProject(null), 300);
  };
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Real-world applications solving practical business problems"
      className="bg-accent/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* Bottom Sheet for Project Details */}
      <ProjectDetailsBottomSheet
        project={selectedProject}
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
      />
    </Section>
  );
}
