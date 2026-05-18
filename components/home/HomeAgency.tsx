"use client";

import Link from "next/link";
import { ArrowRight, Palette, Code, Bot, Sparkles, Smartphone } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";
import { Badge } from "../ui/Badge";

const agencyCapabilities = [
  { icon: Code, label: "Web & Software Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Palette, label: "UI/UX & Branding" },
  { icon: Bot, label: "Automation & Integrations" },
  { icon: Sparkles, label: "Modern Digital Experiences" },
];

export default function HomeAgency() {
  return (
    <section className="py-10 px-5 md:px-10 relative overflow-hidden">
      <BackgroundBlur className="top-1/2 right-0" opacity={0.08} />

      <AgencyContent />
    </section>
  );
}

function AgencyContent() {
  return (
    <div className="mx-auto relative z-10">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 md:p-12 rounded-3xl border border-foreground/10 bg-foreground/[0.02]">
          <div className="space-y-5">
            <Badge>Digital Agency</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tighter">
              Need a focused project?{" "}
              <span className="text-primary">We build that too.</span>
            </h2>
            <p className="text-sm md:text-lg text-foreground/70 font-light leading-relaxed max-w-xl">
              Alongside long-term partnerships, we operate as a modern freelance
              digital agency—delivering websites, apps, branding, UI/UX, and custom
              digital solutions with the same premium quality and attention to detail.
            </p>
            <Link href="/hire-us">
              <Button className="group w-full md:w-auto">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {agencyCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-foreground/10 bg-foreground/5 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="p-2 rounded-xl bg-primary/10 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
