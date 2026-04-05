"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Globe as Linkedin } from "lucide-react";
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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground">
                Whether you have an interesting environmental project, need a consultation on waste management, or just want to discuss ecology, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">dinethri.s@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">LinkedIn</div>
                  <div className="text-muted-foreground">linkedin.com/in/dinethri-s</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Location</div>
                  <div className="text-muted-foreground">Moscow, Russia</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
               <div className="grid sm:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                   <input
                     id="name"
                     type="text"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                     required
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                   <input
                     id="email"
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                     required
                   />
                 </div>
               </div>
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    required
                  ></textarea>
               </div>
               <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full bg-primary text-primary-foreground font-medium rounded-lg px-4 py-3 hover:bg-eco-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
               >
                 {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : <><Send size={18} /> Send Message</>}
               </button>
               {status === "error" && (
                 <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
               )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
