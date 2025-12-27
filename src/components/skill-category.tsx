"use client";

import { Skill } from "@/types/portfolio";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

interface SkillCategoryProps {
  skill: Skill;
  index: number;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function SkillCategory({ skill, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-4 group"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "2rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="h-1 bg-linear-to-r from-primary to-accent rounded-full"
        />
        <h3 className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          {skill.category}
        </h3>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {skill.items.map((skillItem) => {
          // Dynamically get icon from react-icons
          const IconComponent = (Icons as any)[skillItem.icon];

          return (
            <motion.div
              key={skillItem.name}
              variants={item}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group/item"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity" />

              {/* Skill badge */}
              <div className="relative flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-all duration-300 cursor-pointer">
                {IconComponent && (
                  <IconComponent className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                )}
                <span className="text-sm font-medium">{skillItem.name}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
