"use client";

import { Leaf, Heart, Globe, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-20 pb-10">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3 text-emerald-400 font-bold text-2xl tracking-tighter">
              <Leaf size={28} /> Dinethri Sulakshani
            </div>
            <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed">
              Pioneering sustainable engineering solutions for a cleaner, greener, and more resilient global ecosystem.
            </p>
            <div className="flex items-center gap-4">
               {[Globe, Mail, MessageSquare].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">
                     <Icon size={18} />
                  </a>
               ))}
            </div>
          </div>

          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Education", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
               <li className="flex items-center gap-2 italic">Based in Moscow, RU</li>
               <li>dinethri.s@example.com</li>
               <li>+7 (XXX) XXX-XX-XX</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {year} Dinethri Sulakshani. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            Developed with <Heart size={14} className="text-emerald-500 animate-pulse" /> for a <span className="text-emerald-400">sustainable future</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}

