"use client";

import { Project } from "@/types/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
  readonly onViewDetails: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300">
        {/* Project Image */}
        {/* {project.imageUrl && (
          <div className="relative w-full aspect-video overflow-hidden bg-muted">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )} */}

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-10">
            {project.solution}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 min-h-8">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium px-2.5 py-0.5"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="secondary"
                className="text-xs font-medium px-2.5 py-0.5"
              >
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-border/50" />

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-medium px-3 group/btn"
              onClick={() => onViewDetails(project)}
            >
              View Project
              <ArrowUp className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Button>

            <div className="flex gap-2">
              {project.demoUrl && (
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8"
                  asChild
                  title="Live Demo"
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              )}

              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                asChild
                title="Source Code"
              >
                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
