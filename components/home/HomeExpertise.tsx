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
            <div className="mb-5 px-2">
              <Badge>Our Expertise</Badge>
              <div className="flex md:flex-row flex-col items-start gap-4 md:items-center justify-between">
              <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tighter">
                Solutions that
                <span className="text-primary"> drive results.</span>
              </h2>
              <Link href="/expertise" className="hidden md:block">
              <Button variant="outline">
                View All Expertise
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
                View All Expertise
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
