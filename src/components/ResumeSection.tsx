"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

export function ResumeSection() {
  const educations = [
    {
      degree: "MSc in Waste Management",
      institution: "RUDN University",
      period: "2024 – Present",
      description: "Specializing in sustainable urban waste disposal systems and circular economy models.",
    },
    {
      degree: "BSc in Environmental Engineering",
      institution: "RUDN University",
      period: "2019 – 2023",
      description: "Foundation in ecological models and engineering principles. Graduated with honors.",
    }
  ];

  const experiences = [
    {
      role: "Official Translator",
      organization: "High Court of Nikulinsky Rayon",
      period: "Sep 2025 – Present",
      description: "Providing certified translation for environmental and legal documentations.",
    },
    {
      role: "Administrative Office Assistant",
      organization: "RUDN University",
      period: "Jan 2026 – Present",
      description: "Managing administrative processes and coordinating international research initiatives.",
    },
    {
      role: "Laboratory Assistant",
      organization: "RUDN University",
      period: "Mar 2026 – Present",
      description: "Assisting in critical ecological tests and preparing complex chemical samples.",
    }
  ];

  return (
    <section id="resume" className="section-padding bg-slate-50/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">Journey</h2>
          <p className="text-slate-500 dark:text-slate-400 font-light text-lg">My academic foundation and professional path.</p>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Side */}
          <div>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/10">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Education</h3>
            </div>
            <div className="space-y-10">
              {educations.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800 last:before:h-2"
                >
                  <div className="absolute left-[-4px] top-[10px] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]" />
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">{item.period}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{item.degree}</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">{item.institution}</p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-light text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Side */}
          <div>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-emerald-500/10">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Experience</h3>
            </div>
            <div className="space-y-10">
              {experiences.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-800 last:before:h-2"
                >
                  <div className="absolute left-[-4px] top-[10px] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]" />
                  <div className="flex flex-col gap-1 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-1">{item.period}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{item.role}</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">{item.organization}</p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-light text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
