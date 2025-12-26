"use client";

import { Code2, Laptop, Palette, Rocket } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Full-stack web and mobile applications",
    },
    {
      icon: Laptop,
      title: "UI/UX Focus",
      description: "API integrations, authentication, database management",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that scale.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-linear-to-r from-accent/5 to-primary/5"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-sans text-foreground mb-6">
              Passionate Developer
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <Image
                src="/profile.png"
                alt="Anthony"
                width={400}
                height={400}
                className="relative z-10 w-full max-w-md mx-auto aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {portfolioData.about.description}
              </p>

              <div className="grid gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-background border rounded-md border-border hover:border-primary transition-colors duration-300"
                  >
                    <div className="p-2 bg-primary/10">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      {/* <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3> */}
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
