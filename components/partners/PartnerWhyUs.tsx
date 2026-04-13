"use client";

import React from "react";
import { Handshake, LineChart, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import BackgroundBlur from "@/components/animation/BackgroundBlur";
import { Badge } from "@/components/ui/Badge";

const reasons = [
  {
    icon: LineChart,
    title: "Proven delivery",
    body: "We consult, scope, and execute so referrals turn into outcomes — not open loops.",
  },
  {
    icon: Handshake,
    title: "Partner-first terms",
    body: "Clear engagement models and transparent communication at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Your reputation protected",
    body: "Quality, timelines, and ownership are on us — you focus on relationships.",
  },
];

const PartnerWhyUs = () => {
  return (
    <div className="my-10 mx-5 md:mx-10 border-beam">
      <section className="relative md:p-10 p-5 border-beam-content overflow-hidden">
        <BackgroundBlur className="bottom-0 left-1/4" opacity={0.08} />
        <ScrollReveal>
          <Badge>Why partner with us</Badge>
          <h2 className="text-2xl md:text-5xl font-medium mb-4 max-w-3xl">
            See value before you{" "}
            <span className="text-primary">refer a single lead</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-lg max-w-2xl mb-10 font-light">
            Understand our offer: strategic builds, automation, and team
            augmentation — executed end-to-end with the same craft as our
            flagship client work.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={0.05 * (i + 1)}>
              <div className="h-full p-6 rounded-2xl bg-foreground/[0.03] border border-foreground/10 backdrop-blur-sm hover:border-primary/35 transition-colors duration-300">
                <Icon
                  className="w-8 h-8 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed font-light">
                  {body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnerWhyUs;
