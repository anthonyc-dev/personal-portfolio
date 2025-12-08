"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  ExternalLink,
  Code2,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import { Section } from "./ui/section";

interface ProjectDetailsBottomSheetProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsBottomSheet({
  project,
  isOpen,
  onClose,
}: ProjectDetailsBottomSheetProps) {
  if (!project) return null;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerTitle className="sr-only">{project.title}</DrawerTitle>
        <DrawerDescription className="sr-only">
          {project.solution}
        </DrawerDescription>
        <div className="overflow-y-auto">
          <Section className="md:mx-20 px-4 md:px-6 lg:px-8 py-6 pb-12">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3 pr-12">
                {project.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex gap-3 mb-6"
            >
              {project.demoUrl && (
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}

              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>

            {/* Project Image */}
            {project.imageUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative w-full max-w-2xl mx-auto aspect-video mb-8 overflow-hidden rounded-lg border shadow-lg"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Floating icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-10 pointer-events-none"
              >
                <Code2 className="w-32 h-32 text-primary" />
              </motion.div>
              {/* Main Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Problem Statement */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </motion.section>

                {/* Solution */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </motion.section>

                {/* Results & Impact */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Key Results
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {project.results.map((result: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.6 + index * 0.05,
                        }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {result}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="rounded-lg border bg-card p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-semibold text-foreground">
                      Tech Stack
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="rounded-lg border bg-card p-5"
                >
                  <h4 className="font-semibold text-foreground mb-3">
                    Project Links
                  </h4>
                  <div className="space-y-2">
                    {project.demoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Demo
                        </a>
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      asChild
                    >
                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Section>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
