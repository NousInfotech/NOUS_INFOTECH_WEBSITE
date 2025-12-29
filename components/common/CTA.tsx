"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to start your next project?",
  subtitle = "Let's bring your ideas to life.",
  buttonText = "Get In Touch Now",
  buttonLink = "/hire",
  align = "center",
  className = "",
}) => {
  const alignment = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`mx-10 border-beam ${className}`}>
      <section
        className={`flex flex-col gap-10 p-10 border-beam-content ${alignment}`}
      >
        <BackgroundBlur className="bottom-0 right-1/4" opacity={0.4} />
        <ScrollReveal>
          <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tight text-foreground mb-4">
            {title}
          </h2>

          <p className="text-sm md:text-2xl lg:text-4xl text-foreground/60 max-w-2xl mx-auto mb-10 font-light">
            {subtitle}
          </p>

          <Link href={buttonLink}>
            <Button>
              {buttonText}
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default CTA;
