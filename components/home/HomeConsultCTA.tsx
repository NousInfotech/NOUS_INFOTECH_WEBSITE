"use client";

import Link from "next/link";
import CalendlyLink from "../common/CalendlyLink";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";
import { Badge } from "../ui/Badge";

interface HomeConsultCTAProps {
  variant?: "primary" | "compact";
}

export default function HomeConsultCTA({ variant = "primary" }: HomeConsultCTAProps) {
  const isCompact = variant === "compact";

  return (
    <div className={`${isCompact ? "my-6" : "my-10"} mx-5 md:mx-10 border-beam`}>
      <section
        className={`relative border-beam-content overflow-hidden ${
          isCompact ? "p-6 md:p-8" : "p-8 md:p-12"
        }`}
      >
        <BackgroundBlur className="bottom-0 left-1/4" opacity={0.25} />

        <ScrollReveal>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <Badge>Free Consultation</Badge>
              <h2
                className={`font-medium leading-tight tracking-tighter ${
                  isCompact
                    ? "text-xl md:text-3xl"
                    : "text-2xl md:text-4xl lg:text-5xl"
                }`}
              >
                Let&apos;s map your{" "}
                <span className="text-primary">growth strategy</span> together
              </h2>
              <p className="text-sm md:text-lg text-foreground/70 font-light leading-relaxed">
                Tell us where you want to scale your revenue.
                We&apos;ll help you see what high-converting digital marketing, unified systems, and automation could look
                like—for your team, your leads, and your growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <CalendlyLink>
                <Button className="w-full sm:w-auto group">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CalendlyLink>
              <Link href="/hire-us">
                <Button variant="outline" className="w-full sm:w-auto">
                  Discuss a Project
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
