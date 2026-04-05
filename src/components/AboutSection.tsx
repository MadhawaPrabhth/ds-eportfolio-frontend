"use client";

import { motion } from "framer-motion";
import { Globe, BookOpen, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am an Environmental Engineer and Ecologist holding a BSc from RUDN University in Moscow. 
              Currently, I am pursuing my MSc in Waste Management, deepening my expertise in crafting sustainable processes for urban centers.
            </p>
            <p>
              My background involves extensive laboratory work, environmental monitoring, and translating critical ecological data for broader understanding.
              With fluency in Sinhala, English, Russian, Tamil, and German, my ultimate goal is to contribute to sustainable environmental solutions on a global scale.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Globe, title: "Global Perspective", text: "Fluency in 5 languages enables international collaboration." },
              { icon: BookOpen, title: "Academic Rigor", text: "Continuous research in modern waste management strategies." },
              { icon: Heart, title: "Passionate", text: "Deeply committed to sustainability and ecological preservation." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
