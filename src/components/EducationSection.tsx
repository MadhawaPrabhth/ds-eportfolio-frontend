"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function EducationSection() {
  const educations = [
    {
      degree: "MSc in Waste Management",
      institution: "RUDN University",
      location: "Moscow, Russia",
      period: "2024 – Present",
      description: "Specializing in sustainable urban waste disposal systems, circular economy models, and environmental impact analysis.",
      achievements: ["Research Excellence", "Sustainability Focus"],
      icon: GraduationCap,
    },
    {
      degree: "BSc in Environmental Engineering",
      institution: "RUDN University",
      location: "Moscow, Russia",
      period: "2019 – 2023",
      description: "Foundation in ecological models, engineering principles, and environmental data analysis. Graduated with honors.",
      achievements: ["Top Percentile", "Lab Assistant"],
      icon: GraduationCap,
    }
  ];

  return (
    <section id="education" className="section-padding bg-slate-50/50 dark:bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <div className="absolute -left-[45px] md:-left-[61px] top-1 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md">
                <edu.icon size={20} className="text-primary" />
              </div>
              
              <div className="bg-muted/30 p-6 rounded-2xl shadow-sm border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-primary font-medium mb-3">{edu.institution}</h4>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
