"use client";

import { motion } from "framer-motion";
import { Globe, BookOpen, Heart, Languages, GraduationCap, Microscope, Award, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    { icon: Languages, title: "Multilingual", text: "Fluent in 5 languages (Sinhala, English, Russian, Tamil, German)." },
    { icon: GraduationCap, title: "Specialist", text: "MSc Candidate specializing in modern Waste Management." },
    { icon: Microscope, title: "Research", text: "Extensive background in laboratory and field monitoring." },
    { icon: Globe, title: "Global Impact", text: "Experience in international environmental projects." },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} /> 
              <span>My Story</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-slate-900 dark:text-white leading-[1.2]">
              Pioneering <span className="text-emerald-600 dark:text-emerald-400">Sustainable Solutions</span> for a Greener World.
            </h2>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
              <p>
                I am an Environmental Engineer and Ecologist with a firm foundation from <span className="font-semibold text-slate-900 dark:text-white">RUDN University, Moscow</span>. My journey is driven by a deep commitment to environmental preservation and the implementation of circular economy models.
              </p>
              <p>
                Currently pursuing my MSc in Waste Management, I focus on the intersection of urban engineering and ecological sustainability. I bring a blend of laboratory expertise, field research, and administrative precision to every project I undertake.
              </p>
              <p>
                My ability to communicate in five languages allows me to bridge gaps between local initiatives and global environmental standards.
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm border border-slate-200 dark:border-slate-700 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light text-[15px] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
