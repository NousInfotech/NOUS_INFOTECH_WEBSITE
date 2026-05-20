"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../animation/ScrollReveal";
import { aboutPageContent } from "@/lib/data";

const { story } = aboutPageContent;

export default function AboutStory() {
  return (
    <div className="border-beam">
      <div className="border-beam-content md:p-10 lg:p-14 p-6 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-tight lg:sticky lg:top-28"
          >
            {story.title}{" "}
            <span className="text-primary">{story.titleAccent}</span>
          </motion.h2>

          <div className="lg:col-span-7 space-y-6">
            {story.paragraphs.map((paragraph, index) => (
              <ScrollReveal key={index} delay={0.1 + index * 0.08}>
                <p className="text-foreground/75 text-sm md:text-lg font-light leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
