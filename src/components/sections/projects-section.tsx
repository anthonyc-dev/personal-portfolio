"use client";

import Image from "next/image";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface ProjectProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectProps) => {
  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-r from-accent/5 to-primary/5"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase">
              My Work
            </p>
            <h2 className="text-4xl md:text-5xl font-sans text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => {
              // Images are always left, text is always right
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  key={project.title}
                  className="flex flex-col md:flex-row items-center gap-10 md:gap-14"
                >
                  {/* Image always on the left */}
                  <div className="w-full md:w-1/2">
                    <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-md group">
                      <Image
                        src={project.imageUrl || "/placeholder.png"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Optional Label */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Link
                          href={`/projects/${project.id}`}
                          className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
                        >
                          View Case Study
                          <ArrowUpRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content always on the right */}
                  <div className="w-full md:w-1/2 flex flex-col md:items-start">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-left max-w-md">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-6 justify-start">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 justify-start">
                      <Link
                        href={`/projects/${project.id}`}
                        aria-label="View live project"
                        className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors hover:underline"
                      >
                        View Case Study
                        <ArrowUpRight size={18} />
                      </Link>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors hover:underline"
                        >
                          GitHub
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center mt-24 space-y-4">
        <p>Want to see more of my projects?</p>
        <Link href={"https://github.com/anthonyc-dev?tab=repositories"}>
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
