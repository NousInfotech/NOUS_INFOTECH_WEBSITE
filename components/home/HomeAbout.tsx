"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';
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
    { icon: Sparkles, text: 'Innovative Design', delay: 0.3 },
    { icon: Zap, text: 'Fast Delivery', delay: 0.4 },
    { icon: Target, text: 'Result-Driven', delay: 0.5 }
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
                  <Badge>Who We Are</Badge>
                  <span className='text-2xl md:text-5xl lg:text-6xl font-medium'>
                    We create <span className="text-primary">unique digital experiences.</span>
                  </span>
               </div>
             {/* Right Column - Content */}
              <div className="space-y-8">
                <p className="text-sm md:text-2xl leading-relaxed opacity-90 font-extralight">
                  We are passionate about our work and its positive impact on clients. 
                  We consistently deliver exceptional web solutions, offering a{' '}
                  <span className="font-semibold opacity-100">best-in-class digital experience</span>. 
                  Our primary focus is on{' '}
                  <span className="font-semibold opacity-100">client satisfaction</span>, 
                  ensuring that we meet and exceed their specific needs.
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
                <Link href="/about">
                <Button className='md:w-auto w-full'>
                  About Agency
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                </Link>
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