"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Download, Menu, X, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 pt-4 ${
        scrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto glass rounded-2xl transition-all duration-500 ${
          scrolled ? "py-2 shadow-2xl" : "py-4 shadow-none bg-transparent border-transparent"
        }`}
      >
        <div className="px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 flex-shrink-0 font-bold text-2xl tracking-tighter text-emerald-600 dark:text-emerald-400"
          >
            <Leaf size={24} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
              D.S.
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, idx) => (
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
              </motion.a>
            ))}
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2" />
            
            <div className="flex items-center gap-4">
              {mounted && (
                <button 
                  onClick={toggleTheme} 
                  className="p-2.5 rounded-xl hover:bg-emerald-500/10 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-all active:scale-95"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              
              <button className="flex items-center gap-2 text-sm font-bold bg-emerald-600 text-white px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
                <Download size={18} /> CV
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-emerald-500/10 transition">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="p-2 rounded-xl hover:bg-emerald-500/10 transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 z-40"
          >
            <div className="glass rounded-3xl p-6 shadow-2xl border border-white/20">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex justify-between items-center px-4 py-3 rounded-2xl font-bold text-slate-700 dark:text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-500 transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button className="flex items-center justify-center gap-2 w-full text-sm font-bold bg-emerald-600 text-white px-6 py-4 rounded-2xl hover:bg-emerald-700 transition">
                    <Download size={18} /> Download CV
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { ArrowRight } from "lucide-react";

