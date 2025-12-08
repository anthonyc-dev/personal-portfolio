'use client';

import { Section } from '@/components/ui/section';
import { SkillCategory } from '@/components/skill-category';
import { Skill } from '@/types/portfolio';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 right-10 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <SkillCategory key={skill.category} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  );
}
