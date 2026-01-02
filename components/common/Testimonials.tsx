"use client";
import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animation/ScrollReveal";

const Testimonials = () => {
  // Triple the data for seamless looping in marquee if it was but we use a grid for now for better readability of content
  // Or better, a horizontal scroll marquee for premium feel
  
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-5 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <Badge>Testimonials</Badge>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Trusted by <span className="text-primary">Industry Leaders.</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with NOUS INFOTECH.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <motion.div
                className="bg-foreground/0.02 border border-primary/50 p-8 rounded-3xl relative group transition-colors hover:border-primary/20 hover:bg-foreground/0.03"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm md:text-lg text-foreground/80 mb-8 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} @ <span className="text-primary/80">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
