"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FolderGit2, ArrowUpRight, Zap, Target } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  outcome: string;
  category: string;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects", err);
        // Fallback for demo purposes
        setProjects([
           {
              id: 1,
              title: "Smart Waste Management System",
              description: "Developed an IoT-based waste monitoring system for urban areas, optimizing collection routes and reducing carbon footprint by 30%.",
              technologies: ["IoT Sensors", "Python", "GIS", "Data Analytics"],
              outcome: "Reduced operational costs by 25% and improved city hygiene.",
              category: "Waste Management"
           },
           {
              id: 2,
              title: "Ecosystem Restoration Analysis",
              description: "Conducted a comprehensive study on the recovery of local biodiversity in post-industrial zones using advanced soil analysis and mapping.",
              technologies: ["Bio-monitoring", "Soil Science", "QGIS", "Statistical Modeling"],
              outcome: "Identified key indicator species for successful soil remediation.",
              category: "Ecology"
           }
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> 
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">Scientific <span className="text-emerald-600 dark:text-emerald-400">Projects</span></h2>
          <p className="text-slate-500 dark:text-slate-400 font-light text-lg">Real-world impact through research and engineering.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-10 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/10">
                    {proj.category}
                  </div>
                  <Target size={24} className="text-slate-300 dark:text-slate-600 group-hover:text-emerald-500 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{proj.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-10 font-light text-[15px] leading-relaxed flex-1">
                  {proj.description}
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl mb-10 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-500/10">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1 uppercase tracking-wider">Key Achievement</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed">{proj.outcome}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, j) => (
                    <span key={j} className="text-[10px] uppercase font-bold tracking-widest bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 group-hover:border-emerald-500/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
