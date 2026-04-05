"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 text-sm font-semibold mb-6">
              <Leaf size={14} /> Global Sustainability 
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I&apos;m <span className="text-primary">Dinethri</span> <br/>
              <span className="text-3xl sm:text-4xl lg:text-5xl text-muted-foreground mt-2 block">
                Ecologist & Environmental Engineer
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
              Passionate about bridging environmental science with sustainable solutions. 
              Currently exploring innovative waste management systems globally.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-eco-600 transition-colors font-medium">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors font-medium">
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute inset-4 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-20" />
              {/* Note: I don't have an image so using a placeholder structural div */}
              <div className="w-full h-full rounded-full bg-muted border-4 border-background shadow-xl overflow-hidden relative z-10 flex items-center justify-center">
                 <Leaf size={80} className="text-primary/40" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
