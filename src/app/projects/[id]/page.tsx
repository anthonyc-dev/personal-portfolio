import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CircleCheckBig, Github } from "lucide-react";

// Accept the id param, matching project by id
interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

// Dummy system architecture diagram data (replace with real data in production)
const dummySystemArchitecture = {
  title: "System Architecture",
  description: "This is a sample architecture for illustration purposes only.",
  steps: [
    {
      name: "Frontend",
      description: "Built with Next.js, React, and TailwindCSS.",
    },
    {
      name: "API Layer",
      description:
        "REST endpoints via Next.js API routes or custom Node.js server.",
    },
    {
      name: "Backend",
      description: "Connected to a PostgreSQL database for persistent storage.",
    },
    {
      name: "Cloud / Hosting",
      description: "Deployed on Vercel with CI/CD and CDN.",
    },
  ],
};

const ProjectDetail = async ({ params }: ProjectDetailProps) => {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  // Safeguard possible leading slash or path issue for next/image:
  // Use absolute url if not already, or fallback to regular img tag as needed
  const imageSrc =
    project.imageUrl && project.imageUrl.startsWith("/")
      ? project.imageUrl
      : project.imageUrl
      ? `${project.imageUrl}`
      : null;

  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Project Main Info */}
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2 w-full rounded-lg shadow overflow-hidden bg-card border border-border">
            {/* Handle image rendering robustly */}
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={project.title}
                width={540}
                height={360}
                className="w-full h-72 object-cover rounded-lg"
                priority
                unoptimized // If remote images or images from /public don't show, try unoptimized
              />
            )}
            {/* If next/image still fails, fallback to old img tag */}
            {!imageSrc && (
              <div className="w-full h-72 flex items-center justify-center bg-muted rounded-lg">
                <span className="text-muted-foreground">
                  No image available
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <Badge variant="secondary" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition font-semibold shadow"
                >
                  <Github size={20} className="mr-2" />
                  GitHub Repo
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* NEW: Dummy System Architecture Section */}
        {/* <div className="bg-card/80 rounded-lg border border-border p-6 mb-6 shadow relative">
          <h2 className="text-lg font-semibold mb-3">
            {dummySystemArchitecture.title}
          </h2>
          <p className="text-muted-foreground mb-4">
            {dummySystemArchitecture.description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {dummySystemArchitecture.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex-1 bg-background border border-border rounded p-4 flex flex-col items-center shadow-sm"
              >
                <div className="w-10 h-10 mb-2 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {idx + 1}
                </div>
                <h3 className="font-semibold mb-1 text-center">{step.name}</h3>
                <p className="text-xs text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Problem & Solution */}
        <div className="bg-card/70 rounded-lg border border-border p-6 mb-6 grid md:grid-cols-2 gap-6 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold mb-2">Problem</h2>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Solution</h2>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-card/70 rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Results</h2>
          <ul className="list-disc space-y-2">
            {project.results.map((result, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <CircleCheckBig size={18} className="text-gray-400" />
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
