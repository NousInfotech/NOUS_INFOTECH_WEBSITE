"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { aboutFaqItems } from "@/lib/data";

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative">
      <div className="border-beam">
        <div className="border-beam-content md:p-10 p-5 space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-2"
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              Working with Nous
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
              Questions we hear{" "}
              <span className="text-primary">often.</span>
            </h2>
            <p className="text-foreground/70 text-sm md:text-base font-light">
              Practical expectations for timelines, communication, and collaboration.
            </p>
          </motion.div>

          <ul className="max-w-3xl mx-auto divide-y divide-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden bg-foreground/5">
            {aboutFaqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-4 py-4 md:px-6 md:py-5 hover:bg-foreground/5 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-medium tracking-tight pr-2">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 md:px-6 md:pb-5 text-foreground/70 text-sm md:text-base font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
