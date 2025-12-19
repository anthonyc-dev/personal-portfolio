"use client";

import React from "react";
import { Section } from "../ui/section";
import { CometCardDemo } from "../CometCardDemo";
import { motion } from "framer-motion";
import { CheckCircle, Target, Zap } from "lucide-react";

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

const AboutMe = ({ description, highlights }: AboutSectionProps) => {
  return (
    <Section title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10">
        {/* image */}
        <div className="flex justify-center items-center">
          <CometCardDemo />
        </div>
        {/* details */}
        <div className="mt-14">
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            {description}
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
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
                  <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-accent/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
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
      </div>
    </Section>
  );
};

export default AboutMe;
