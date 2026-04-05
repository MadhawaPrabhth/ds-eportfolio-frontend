"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-22 lg:pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 blob animate-pulse opacity-50" />
      <div className="absolute bottom-0 right-1/4 blob animate-pulse opacity-30" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-sm font-medium mb-8 shadow-sm"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Engineering a Greener Future</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-4 leading-[1.1]">
              Hi, I&apos;m <span className="text-gradient">Dinethri</span> <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-600 dark:text-slate-400 font-light mt-4 block">
                Ecologist & Environmental Engineer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Pioneering sustainable solutions at the intersection of <span className="font-medium text-slate-900 dark:text-white">environmental science</span> and <span className="font-medium text-slate-900 dark:text-white">modern engineering</span>. Specializing in global waste management and ecosystem restoration.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 font-semibold"
              >
                Explore Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all font-semibold backdrop-blur-sm"
              >
                Let&apos;s Connect
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Globe size={18} className="text-emerald-500" />
                <span>Available Globally</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center gap-2 text-sm font-medium">
                <Leaf size={18} className="text-emerald-500" />
                <span>Eco-Certified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
              {/* Animated Rings */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-[3rem] blur-3xl animate-pulse" />
              <div className="absolute inset-[-20px] rounded-[3rem] border border-emerald-500/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-40px] rounded-[3rem] border border-emerald-500/5 animate-[spin_30s_linear_infinite_reverse]" />

              <div className="w-full h-full glass-card rounded-[3rem] border-[8px] border-white dark:border-slate-800 shadow-2xl overflow-hidden relative z-10 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 group-hover:opacity-0 transition-opacity duration-500" />

                <Image
                  src="/images/heroSection.jpeg"
                  alt="Dinethri Sulakshani - Environmental Scientist"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Floating Badges - Moved outside overflow-hidden to prevent clipping */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-10 glass p-5 rounded-3xl shadow-2xl z-20 hidden lg:block border border-white/40 dark:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-0.5">Location</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Global Presence</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-5 rounded-3xl shadow-2xl z-20 hidden lg:block border border-white/40 dark:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-0.5">Status</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Project Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
