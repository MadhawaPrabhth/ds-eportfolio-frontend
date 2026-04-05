"use client";

import { motion } from "framer-motion";
import { Microscope, Database, Languages, Recycle, Zap, CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const categories = [
    {
      title: "Environmental Analysis",
      icon: Recycle,
      skills: ["Waste Management Models", "Pollution Analysis", "Environmental Monitoring", "GIS Basics"],
      accent: "text-emerald-500",
    },
    {
      title: "Laboratory & Research",
      icon: Microscope,
      skills: ["Spectrophotometry", "Water Quality Testing", "Air Sampling", "Safety Protocols"],
      accent: "text-emerald-500",
    },
    {
      title: "Data & Tech Tools",
      icon: Database,
      skills: ["Python", "MATLAB Fundamentals", "MS Office Suite", "Data Reporting"],
      accent: "text-emerald-500",
    },
    {
      title: "Science Translation",
      icon: Languages,
      skills: ["Official Document Translation", "Academic Publishing", "Multilingual Coordination"],
      accent: "text-emerald-500",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> 
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">Technical <span className="text-emerald-500">Skills</span></h2>
          <p className="text-slate-400 font-light text-lg">Specialized expertise in environmental science and engineering.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-500/10 mb-8 group-hover:scale-110 transition-transform">
                  <cat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-8 tracking-tight uppercase text-white border-b border-white/10 pb-4">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-slate-300 text-[15px] font-light leading-tight">{skill}</span>
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
