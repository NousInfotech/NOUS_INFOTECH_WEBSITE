"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";
import { expertiseData } from "@/lib/data";

const HomeExpertise = () => {
  return (
    <section className="pb-10 px-5 md:px-10 relative overflow-hidden bg-background">
    <BackgroundBlur className="bottom-0 right-1/4" opacity={0.1} />
      <div className="mx-auto relative z-10">
        <ScrollReveal>
            <div className="mb-5 px-2">
              <div className="inline-block mb-6 px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wider opacity-80 text-primary">OUR EXPERTISE</span>
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} height="100%">
              <div className="group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/2 hover:bg-foreground/5 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div>
                  <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <Link href={`/expertise#${item.title.toLowerCase().replace(/ /g, '-')}`} className="flex items-center text-sm font-medium group/link">
                      Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="md:hidden mt-10">
          <ScrollReveal delay={0.4}>
            <Link href="/expertise" className="flex items-center justify-center">
              <Button variant="outline">
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
