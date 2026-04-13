"use client";

import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const cards = [
  { emoji: "💰", title: "Earn per successful deal", copy: "Commission when we close and deliver — aligned with real outcomes." },
  { emoji: "🤝", title: "No execution needed from your side", copy: "You make the intro; we run discovery, delivery, and support." },
  { emoji: "⚡", title: "Fast response & handling", copy: "Leads get a structured follow-up so momentum never stalls." },
  { emoji: "🔒", title: "Transparent process", copy: "Clear stages so you always know where things stand." },
];

const PartnerWhyRefer = () => {
  return (
    <section className="px-5 md:px-10 py-12 md:py-16">
      <ScrollReveal>
        <h2 className="text-2xl md:text-4xl font-medium mb-3 text-center">
          Why <span className="text-primary">refer</span>
        </h2>
        <p className="text-center text-foreground/60 text-sm md:text-base mb-10 max-w-xl mx-auto font-light">
          A simple model: your relationships, our execution — shared upside.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {cards.map(({ emoji, title, copy }, i) => (
          <ScrollReveal key={title} delay={0.05 * i}>
            <article className="h-full p-6 rounded-2xl border border-foreground/10 bg-foreground/[0.03] hover:border-primary/30 transition-colors duration-300">
              <span className="text-2xl mb-3 block" aria-hidden>
                {emoji}
              </span>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed font-light">
                {copy}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default PartnerWhyRefer;
