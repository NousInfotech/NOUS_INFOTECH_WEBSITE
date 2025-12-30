"use client";

import { expertiseData } from "@/lib/data";
import { ScrollReveal } from "../animation/ScrollReveal";
interface ExpertiseGridProps {
  limit?: number;
  className?: string;
}

export const ExpertiseGrid = ({ limit, className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }: ExpertiseGridProps) => {
  const data = limit ? expertiseData.slice(0, limit) : expertiseData;

  return (
    <div className={className}>
      {data.map((item, index) => (
        <ScrollReveal key={index} delay={index * 0.1} height="100%">
          <div className="group relative p-8 rounded-3xl border border-foreground/10 bg-foreground/2 hover:bg-foreground/5 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden">
            {/* Hover Gradient */}
            <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            <div>
              <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="md:text-2xl text-xl font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              {/* <p className="text-foreground/60 leading-relaxed font-light">
                {item.description}
              </p> */}
              {item.points && (
                <ul className="mt-6 space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start text-xs text-foreground/50 group-hover:text-foreground transition-colors duration-500">
                      <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};
