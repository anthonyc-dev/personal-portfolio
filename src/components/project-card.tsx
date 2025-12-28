"use client";

import { Code2, Eye, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-r from-accent/5 to-primary/5 relative"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase">
              My Work
            </p>
            <h2 className="text-4xl md:text-5xl font-sans text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-20 left-50 pointer-events-none"
          >
            <Code2 className="w-32 h-32 text-primary" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                key={index}
                className="group bg-card  rounded-md  border border-border overflow-hidden transition-all duration-1000 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden p-3">
                  <Image
                    src={project.imageUrl || "/placeholder.png"}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110  rounded-md"
                    width={600}
                    height={208}
                    style={{
                      width: "100%",
                      height: "13rem",
                      objectFit: "cover",
                    }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <Link
                      href={`/projects/${project.id}`}
                      className="p-3 bg-background rounded-md text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View live project"
                    >
                      <Eye size={20} />
                    </Link>
                    <a
                      href=""
                      className="p-3 bg-background rounded-md text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(project.technologies) ? (
                      project.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full">
                        {project.technologies}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={"https://github.com/anthonyc-dev?tab=repositories"}>
              <Button variant="outline" size="lg" className="rounded-full">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
