"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const categories = [
    {
      title: "Environmental Analysis",
      skills: ["Waste Management Models", "Pollution Analysis", "Environmental Monitoring", "GIS Basics"],
    },
    {
      title: "Laboratory & Research",
      skills: ["Spectrophotometry", "Water Quality Testing", "Air Sampling", "Safety Protocols"],
    },
    {
      title: "Data & Tech Tools",
      skills: ["Python", "MATLAB Fundamentals", "MS Office Suite", "Data Reporting"],
    },
    {
      title: "Communication & Translation",
      skills: ["Official Document Translation", "Academic Publishing", "Multilingual Coordination"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Competencies</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground border-b border-border pb-3">{cat.title}</h3>
                <ul className="space-y-4 text-sm md:text-base">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
