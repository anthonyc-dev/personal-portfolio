import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

const ProjectDetail = async ({ params }: ProjectDetailProps) => {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  const imageSrc =
    project.imageUrl && project.imageUrl.startsWith("/")
      ? project.imageUrl
      : project.imageUrl
      ? `${project.imageUrl}`
      : null;

  return (
    <div className="min-h-screen py-20 bg-background">
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 right-50 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div> */}
      <div className="container mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-foreground tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        {imageSrc && (
          <div className="mb-10">
            <Image
              src={imageSrc}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-md"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Technologies */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                variant="outline"
                key={tech}
                className="text-xs font-normal border-border/50 bg-primary/10 "
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        {project.githubUrl && (
          <div className="mb-10">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm"
            >
              <Github size={18} />
              <span>View on GitHub</span>
              <ExternalLink size={14} className="opacity-50" />
            </Link>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-border/30 my-10" />

        {/* Problem */}
        <div className="mb-10">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Problem
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            {project.problem}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 my-10" />

        {/* Solution */}
        <div className="mb-10">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Solution
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            {project.solution}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 my-10" />

        {/* Results */}
        <div className="mb-10">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Results
          </h2>
          <ul className="space-y-4">
            {project.results.map((result, idx) => (
              <li
                key={idx}
                className="text-foreground leading-relaxed text-lg pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-foreground/40"
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
