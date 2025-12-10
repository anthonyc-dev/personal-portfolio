"use client";

import { Section } from "@/components/ui/section";
import { CheckCircle, Zap, Target, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  description: string;
  highlights: string[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function AboutSection({ description, highlights }: AboutSectionProps) {
  return (
    <Section
      id="about"
      title="About Me"
      className="bg-accent/5 relative overflow-hidden"
    >
      {/* Background decoration - Reduced blur on mobile */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-xl md:blur-3xl" />

      {/* Floating icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Icon and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mb-6 relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-full blur-md md:blur-md opacity-50" />
            <div className="relative bg-primary/10  rounded-full backdrop-blur-sm border border-primary/20">
              <Image
                src="/darkprof.png"
                alt="Profile"
                width={48}
                height={48}
                className="w-20 h-20 rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <p className="text-lg leading-relaxed text-center text-muted-foreground max-w-3xl">
            {description}
          </p>
        </motion.div>

        {/* Highlights with icons */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlights.map((highlight, index) => {
            const icons = [Zap, Target, CheckCircle];
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10 rounded-xl blur md:blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm">{highlight}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
