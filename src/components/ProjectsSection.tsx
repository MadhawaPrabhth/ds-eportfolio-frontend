"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FolderGit2, Calendar, LayoutGrid } from "lucide-react";

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
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                  {/* Abstract Background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
                  <FolderGit2 size={64} className="text-primary/40 relative z-10" />
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-background border border-border px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
                    {proj.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{proj.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{proj.description}</p>
                  
                  <div className="bg-muted/50 p-4 rounded-xl mb-6 border border-border/50 text-sm">
                    <strong className="text-foreground">Impact:</strong> <span className="text-muted-foreground">{proj.outcome}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, j) => (
                      <span key={j} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
