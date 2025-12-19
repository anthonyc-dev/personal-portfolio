"use client";

import { Project } from "@/types/portfolio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUp, Badge } from "lucide-react";
import { motion } from "framer-motion";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiMysql,
  SiLaravel,
} from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import type { IconType } from "react-icons";
import Image from "next/image";

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
  readonly onViewDetails: (project: Project) => void;
}

const techIconMap: Record<string, IconType> = {
  "React.js": SiReact,
  "React Js": SiReact,
  "React.Js": SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  "Next Js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  TailwindCSS: SiTailwindcss,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Python: SiPython,
  MySQL: SiMysql,
  "Laravel 12": SiLaravel,
  Laravel: SiLaravel,
  Gemini: RiGeminiFill,
  TkBootstrap: FaBootstrap,
  WebSocket: SiSocketdotio,
};

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
        {project.imageUrl && (
          <div className="relative w-full aspect-4/3 overflow-hidden bg-muted">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Card Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 min-h-10">
            {project.solution}
          </p>

          {/* Tech Stack + Actions */}
          <div className="mt-3 flex items-center justify-between gap-3">
            {/* Tech Logos */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => {
                const Icon = techIconMap[tech];
                const fallbackLabel =
                  tech
                    .split(/[\s()]+/g)
                    .filter(Boolean)
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3) || "?";

                return (
                  <div className="relative group/tech" key={tech}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 hover:scale-110 cursor-pointer">
                      {Icon ? (
                        <Icon className="h-4 w-4 text-primary-foreground-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg " />
                      ) : (
                        <span className="text-[10px] font-semibold ">
                          {fallbackLabel}
                        </span>
                      )}
                    </div>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute left-1/2 bottom-full z-50 mb-2 px-2 py-1 rounded bg-background text-xs font-medium text-foreground opacity-0 group-hover/tech:opacity-100 transition-all duration-200 -translate-x-1/2 whitespace-nowrap shadow-lg border border-border">
                      {tech}
                    </span>
                  </div>
                );
              })}
              {project.technologies.length > 4 && (
                <span className="flex items-center text-xs font-medium text-secondary-foreground py-0.5 h-8">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* View Details */}
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-medium px-2 h-7 group/btn"
                onClick={() => onViewDetails(project)}
              >
                View Project
                <ArrowUp className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Button>

              <div className="flex gap-1.5">
                {project.demoUrl && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-7 w-7"
                    asChild
                    title="Live Demo"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}

                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  asChild
                  title="Source Code"
                >
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
