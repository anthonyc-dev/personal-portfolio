"use client";

import { portfolioData } from "@/data/portfolio-data";
import { SkillCategory } from "../skill-category";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = portfolioData.skills;
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2 tracking-widest uppercase">
              My Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-sans text-foreground mb-6">
              Technologies I Work With
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-xl md:blur-3xl pointer-events-none" />

          {/* Floating icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-10 right-50 pointer-events-none"
          >
            <Code2 className="w-32 h-32 text-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 justify-center items-center">
            {skills.map((skill, index) => (
              <SkillCategory key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
