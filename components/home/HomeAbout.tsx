"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import Link from 'next/link';
import BackgroundBlur from '../animation/BackgroundBlur';

const HomeAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  const features = [
    { icon: Sparkles, text: 'Innovative Design', delay: 0.3 },
    { icon: Zap, text: 'Fast Delivery', delay: 0.4 },
    { icon: Target, text: 'Result-Driven', delay: 0.5 }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-10 bg-background text-foreground overflow-hidden"
    >
      <BackgroundBlur className="bottom-0 right-1/4" opacity={0.07} />

      <div className="relative mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Title with Parallax */}
          <div 
            ref={titleRef}
            onMouseMove={handleMouseMove}
            className="relative"
          >
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wider opacity-80 text-primary">WHO WE ARE</span>
              </div>
              
              <h2 
                className="text-5xl md:text-7xl font-medium leading-tight mb-8 relative"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - 50) * 0.05}deg) rotateX(${(50 - mousePosition.y) * 0.05}deg)`
                }}
              >
                <span className="inline-block">
                  We create
                </span>
                <br />
                <span className="inline-block opacity-90">
                  unique digital
                </span>
                <br />
                <span className="inline-block opacity-80">
                  experiences
                </span>
                <span className="inline-block ml-2 animate-pulse">.</span>
              </h2>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div 
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <p className="text-xl md:text-2xl leading-relaxed opacity-90 font-light">
                We are passionate about our work and its positive impact on clients. 
                We consistently deliver exceptional web solutions, offering a{' '}
                <span className="font-semibold opacity-100">best-in-class digital experience</span>. 
                Our primary focus is on{' '}
                <span className="font-semibold opacity-100">client satisfaction</span>, 
                ensuring that we meet and exceed their specific needs.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
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
              <Button>
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
  );
};

export default HomeAbout;