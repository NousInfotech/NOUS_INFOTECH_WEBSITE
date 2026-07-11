"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Megaphone, TrendingUp, Layers } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';
import CalendlyLink from '../common/CalendlyLink';
import BackgroundBlur from '../animation/BackgroundBlur';
import { Badge } from '../ui/Badge';

const HomeAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Megaphone, text: 'Digital Marketing', delay: 0.3 },
    { icon: TrendingUp, text: 'Lead Generation', delay: 0.4 },
    { icon: Layers, text: 'Digital Transformation', delay: 0.5 },
  ];

  return (
    <div className="my-10 mx-5 md:mx-10 border-beam">
      <section 
        ref={sectionRef}
        className="relative md:p-10 p-5 border-beam-content overflow-hidden"
      >
        <BackgroundBlur className="bottom-0 right-1/4" opacity={0.07} />

        <div className="relative mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                 <div className='flex flex-col items-start'>
                  <Badge>Your Growth Partner</Badge>
                  <span className="text-2xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tighter">
                    We turn your online presence into{" "}
                    <span className="text-primary">scalable revenue.</span>
                  </span>
               </div>
             {/* Right Column - Content */}
              <div className="space-y-8">
                <p className="text-sm md:text-xl leading-relaxed text-foreground/80 font-light">
                  Many businesses struggle with poor online visibility, low conversion rates, and 
                  operational clutter. We step in as your{" "}
                  <span className="font-medium text-foreground">
                    long-term growth partner
                  </span>
                  —driving high-quality leads, running profitable marketing campaigns, and building
                  the digital systems your team needs to scale. From startups to established
                  companies, we help you dominate your market and grow revenue efficiently.
                </p>
              {/* Feature Pills */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex items-center gap-2 px-5 py-3 bg-foreground/5 border border-foreground/10 rounded-full backdrop-blur-sm hover:bg-foreground/10 hover:border-primary/40 transition-all duration-300 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${feature.delay}s` }}
                    >
                      <Icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-primary" />
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyLink>
                    <Button className="md:w-auto w-full">
                      Discuss Your Growth Plan
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CalendlyLink>
                  <Link href="/about">
                    <Button variant="outline" className="md:w-auto w-full">
                      About Us
                    </Button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            50% {
              opacity: 0.1;
            }
            100% {
              transform: translateY(-100vh) translateX(50px);
              opacity: 0;
            }
          }
          .animate-float {
            animation: float linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default HomeAbout;