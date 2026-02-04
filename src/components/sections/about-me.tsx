"use client";

import { Code2, Laptop, Rocket } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";

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
      className="py-24 bg-linear-to-r from-accent/5 to-primary/5 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-20 left-60 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div>
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
            <div
              className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Image */}
                <Image
                  src="/me2.png"
                  alt="Anthony"
                  width={400}
                  height={400}
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="
                    w-full aspect-square object-cover
                    grayscale
                    transition-transform duration-500 ease-out
                    group-hover:scale-105 group-hover:grayscale-0
                    will-change-transform
                    sm:min-h-65 md:min-h-80 lg:min-h-95
                  "
                />

                {/* Bottom overlay (blur NOT animated) */}
                <div
                  className="
                    absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28 lg:h-32
                    bg-linear-to-t from-black/60 via-black/30 to-transparent
                    backdrop-blur-md
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 ease-out
                    will-change-opacity
                    pointer-events-none
                  "
                />

                {/* Text */}
                <div
                  className="
                    absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 z-10
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    will-change-transform will-change-opacity
                  "
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-sarif text-white">
                    Anthony Crausus
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/80 tracking-wide">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            <div
              className="space-y-6"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                {portfolioData.about.description}
              </p>

              <div className="flex flex-col gap-6 pt-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      relative flex items-center gap-3 p-3 bg-background
                      border border-border rounded-xl shadow-lg
                      transition-all duration-400 group
                      hover:scale-[1.03] hover:border-primary/70 hover:shadow-primary/10
                    `}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 group-hover:bg-primary/25 transition-colors duration-300 ring-2 ring-primary/20">
                      <item.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div>
                      {item.title && (
                        <h3 className="font-bold  text-base mb-1 tracking-wide bg-linear-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                      )}
                      <p className="text-sm  text-muted-foreground/90 leading-snug">
                        {item.description}
                      </p>
                    </div>
                    {/* Subtle highlight ring animation */}
                    <span className="absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[0_0_0_3px] group-hover:shadow-primary/20 transition"></span>
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
