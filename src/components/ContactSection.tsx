"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, ArrowRight, Globe, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "dinethri.s@example.com", color: "bg-blue-500/10 text-blue-500" },
    { icon: Globe, label: "LinkedIn", value: "linkedin.com/in/dinethri-s", color: "bg-emerald-500/10 text-emerald-500" },
    { icon: MapPin, label: "Location", value: "Moscow, Russia", color: "bg-purple-500/10 text-purple-500" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-900/20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Let&apos;s Build a <span className="text-gradient">Green Future</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Communication is Key</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                Whether you have an interesting environmental project, need a consultation on waste management, or just want to discuss ecology, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, i) => (
                <motion.div 
                   key={i}
                   whileHover={{ x: 10 }}
                   className="flex items-center gap-6 p-6 glass-card rounded-[2rem] border-white/40 dark:border-white/5"
                >
                  <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center shadow-lg transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-slate-200">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-[3rem] border-white/60 dark:border-white/10 shadow-2xl relative overflow-hidden group">
               {/* Visual Accent */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
               
               <div className="grid sm:grid-cols-2 gap-8 mb-8">
                 <div className="space-y-2">
                   <label htmlFor="name" className="ml-2 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Name</label>
                   <input
                     id="name"
                     type="text"
                     placeholder="John Doe"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-900 dark:text-white font-medium"
                     required
                   />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="email" className="ml-2 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Email Address</label>
                   <input
                     id="email"
                     type="email"
                     placeholder="john@example.com"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-900 dark:text-white font-medium"
                     required
                   />
                 </div>
               </div>
               <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="ml-2 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Your Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 transition-all text-slate-900 dark:text-white font-medium resize-none"
                    required
                  ></textarea>
               </div>
               
               <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="group relative w-full overflow-hidden bg-emerald-600 text-white font-bold rounded-2xl px-8 py-5 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
               >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      "Message Received!"
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
               </button>
               
               <AnimatePresence>
                 {status === "error" && (
                   <motion.p 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="mt-4 text-red-500 text-sm font-bold text-center"
                   >
                     Failed to send message. Please try again or reach out directly.
                   </motion.p>
                 )}
               </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
