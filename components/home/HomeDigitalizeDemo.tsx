"use client";

import Link from "next/link";
import CalendlyLink from "../common/CalendlyLink";
import {
  ArrowRight,
  Calendar,
  Lock,
  Shield,
  Workflow,
  LayoutDashboard,
  Building2,
  Bot,
  FileKey,
} from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";
import { Badge } from "../ui/Badge";

const confidentialShowcase = [
  {
    icon: Workflow,
    label: "Workflow Automation",
    hint: "Manual processes → automated pipelines",
  },
  {
    icon: LayoutDashboard,
    label: "Operations Dashboards",
    hint: "Real-time visibility across teams",
  },
  {
    icon: Building2,
    label: "Firm Digitalization",
    hint: "End-to-end operational systems",
  },
  {
    icon: Bot,
    label: "AI & Smart Integrations",
    hint: "Intelligent tools inside daily work",
  },
];

export default function HomeDigitalizeDemo() {
  return (
    <section className="py-10 px-5 md:px-10 relative overflow-hidden">
      <BackgroundBlur className="bottom-0 left-1/3" opacity={0.12} />

      <DigitalizeDemoContent />
    </section>
  );
}

function DigitalizeDemoContent() {
  return (
    <div className="mx-auto relative z-10">
      <ScrollReveal>
        <div className="border-beam">
          <div className="border-beam-content p-8 md:p-12 overflow-hidden relative">
            <BackgroundBlur className="top-0 right-0" opacity={0.15} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-6">
                <Badge>Confidential Work</Badge>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-semibold uppercase tracking-widest">
                  <Shield className="w-3.5 h-3.5" />
                  NDA Protected Projects
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tighter">
                  See our{" "}
                  <span className="text-primary">digitalization demos</span> live
                </h2>

                <p className="text-sm md:text-lg text-foreground/70 font-light leading-relaxed max-w-xl">
                  Many of our strongest firm digitalization projects—custom software,
                  automation, and unified operations—can&apos;t be published online due to
                  client NDAs and confidentiality agreements.
                </p>

                <p className="text-sm md:text-base text-foreground/60 font-light leading-relaxed max-w-xl">
                  Book a private demo call and we&apos;ll walk you through real examples:
                  how we transformed scattered workflows, built internal systems, and helped
                  businesses run smarter—without exposing client identities or sensitive data.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Live walkthrough of past digitalization work",
                    "Before/after operational impact (shared under NDA)",
                    "Q&A tailored to your industry and challenges",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <CalendlyLink inquiryType="Digitalize Demo">
                  <Button className="group w-full md:w-auto mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Demo Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CalendlyLink>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {confidentialShowcase.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group relative rounded-2xl border border-foreground/10 bg-foreground/[0.03] overflow-hidden aspect-4/3 flex flex-col justify-end p-5"
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-foreground/5 opacity-60" />
                      <div className="absolute inset-0 backdrop-blur-[2px] bg-background/40 group-hover:bg-background/30 transition-colors duration-500" />

                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 border border-foreground/10 backdrop-blur-sm">
                        <Lock className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                          NDA
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
                        <div className="w-16 h-16 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                          <FileKey className="w-8 h-8 text-primary/60" />
                        </div>
                      </div>

                      <div className="relative z-10 space-y-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded-lg bg-primary/10">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-sm font-semibold tracking-tight">
                          {item.label}
                        </h3>
                        <p className="text-xs text-foreground/50 font-light">
                          {item.hint}
                        </p>
                        <p className="text-[10px] text-primary/80 uppercase tracking-widest pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Available on demo call
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="relative z-10 mt-8 pt-6 border-t border-foreground/10 text-center text-xs md:text-sm text-foreground/50 font-light max-w-2xl mx-auto">
              Public portfolio shows a slice of our work. The full picture of how we
              digitalize firms is shared privately—book a demo to explore what&apos;s
              possible for your business.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
