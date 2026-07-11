"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";
import { ExpertiseGrid } from "../common/ExpertiseGrid";
import { Badge } from "../ui/Badge";

const HomeExpertise = () => {
  return (
    <section className="py-10 px-5 md:px-10 relative overflow-hidden bg-background">
      <BackgroundBlur className="hidden md:block bottom-0 right-1/4" opacity={0.1} />
      <div className="mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-8 px-2 space-y-5">
            <Badge>How We Help</Badge>
            <div className="flex md:flex-row flex-col items-start gap-6 md:items-end justify-between">
              <div className="space-y-4 max-w-4xl">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tighter">
                  From digital presence to{" "}
                  <span className="text-primary">profitable growth.</span>
                </h2>
                <p className="text-sm md:text-lg text-foreground/60 font-light max-w-2xl">
                  Growth-oriented solutions—not just a service checklist. We market,
                  automate, and build the digital infrastructure modern companies need to scale revenue.
                </p>
              </div>
              <Link href="/expertise" className="hidden md:block shrink-0">
                <Button variant="outline">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ExpertiseGrid limit={6} />

        <div className="md:hidden mt-10">
          <ScrollReveal delay={0.4}>
            <Link href="/expertise" className="flex items-center justify-center mx-5">
              <Button variant="outline" className="w-full">
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeExpertise;
