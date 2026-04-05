"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Official Translator",
      organization: "High Court of Nikulinsky Rayon, Moscow",
      period: "Sep 2025 – Present",
      status: "Present",
      description: "Providing certified translation services for environmental and legal documentations.",
      icon: Briefcase,
    },
    {
      role: "Administrative Office Assistant",
      organization: "Peoples' Friendship University of Russia (RUDN)",
      period: "Jan 2026 – Present",
      status: "Present",
      description: "Managing administrative processes for the international ecology department.",
      icon: Briefcase,
    },
    {
      role: "Laboratory Assistant",
      organization: "RUDN University",
      period: "Mar 2026 – Present",
      status: "Present",
      description: "Assisting in critical ecological tests, preparing samples, and maintaining laboratory equipment.",
      icon: Briefcase,
    },
    {
      role: "Research Intern",
      organization: "Ecological Faculty, RUDN",
      period: "Nov 2025 – Jan 2026",
      status: "Completed",
      description: "Analyzed local flora adaptations to urban pollution.",
      icon: Briefcase,
    },
    {
      role: "Research Intern",
      organization: "Russian Academy of Sciences",
      period: "Jun 2023 – Dec 2024",
      status: "Completed",
      description: "Participated in long-term environmental monitoring projects and data collection.",
      icon: Briefcase,
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <div className="absolute -left-[45px] md:-left-[61px] top-1 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
                <exp.icon size={20} className="text-primary" />
              </div>
              
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border group hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-primary font-medium mb-3">{exp.organization}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
