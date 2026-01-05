"use client";
import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import Image from "next/image";
import { Star, Quote, Linkedin, Link2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animation/ScrollReveal";
import Link from "next/link";

const Testimonials = ({className}: {className?: string}) => {
  // Triple the data for seamless looping in marquee if it was but we use a grid for now for better readability of content
  // Or better, a horizontal scroll marquee for premium feel
  
  return (
    <section className={`bg-background relative overflow-hidden ${className}`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div>
        <ScrollReveal>
          <div className="text-center mb-5 space-y-2">
            <Badge>Testimonials</Badge>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Trusted by <span className="text-primary">Industry Leaders.</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-xs md:text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with NOUS INFOTECH.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1} height="100%">
              <motion.div
                className="bg-foreground/0.02 border border-primary/50 p-8 rounded-3xl relative group transition-colors hover:border-primary/20 hover:bg-foreground/0.03 h-full flex flex-col"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => {
                      const rating = testimonial.rating;
                      const isFull = i + 1 <= Math.floor(rating);
                      const isExtra = i + 1 > Math.ceil(rating);
                      const isHalf = !isFull && !isExtra;

                      return (
                        <div key={i} className="relative">
                          <Star className="w-4 h-4 text-primary/20" />
                          {isFull && (
                            <Star className="w-4 h-4 fill-primary text-primary absolute top-0 left-0" />
                          )}
                          {isHalf && (
                            <div className="absolute top-0 left-0 w-[50%] overflow-hidden">
                              <Star className="w-4 h-4 fill-primary text-primary" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>

                <p className="text-sm md:text-lg text-foreground/80 mb-8 italic leading-relaxed grow">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex md:flex-row flex-col md:items-center items-start justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
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

                  <div className="flex gap-2">
                    {testimonial.link && (
                      <Link 
                        href={testimonial.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/5 text-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        title="Visit Website"
                      >
                        <Link2 size={16}/>
                      </Link>
                    )}
                    {testimonial.linkedIn && (
                      <Link 
                        href={testimonial.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/5 text-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        title="LinkedIn Profile"
                      >
                        <Linkedin size={16}/>
                      </Link>
                    )}
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
