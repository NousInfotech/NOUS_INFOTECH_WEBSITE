"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import BackgroundBlur from "../animation/BackgroundBlur";
import { CALENDLY_BOOKING_URL, isExternalUrl } from "@/lib/calendly";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to simplify your operations?",
  subtitle =
    "Partner with a team that digitalizes, automates, and builds the systems your business needs to scale.",
  buttonText = "Book a Consultation",
  buttonLink = CALENDLY_BOOKING_URL,
  align = "center",
  className = "",
}) => {
  const alignment = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`my-10 mx-10 border-beam ${className}`}>
      <section
        className={`flex flex-col gap-10 p-10 border-beam-content ${alignment}`}
      >
        <BackgroundBlur className="bottom-0 right-1/4" opacity={0.4} />
        <ScrollReveal>
          <h2 className="md:text-5xl lg:text-7xl font-medium leading-tight tracking-tight text-foreground mb-2">
            {title}
          </h2>

          <p className="text-xs md:text-2xl lg:text-4xl text-foreground/60 max-w-2xl mx-auto mb-5 font-light">
            {subtitle}
          </p>

          <Link
            href={buttonLink}
            {...(isExternalUrl(buttonLink)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Button>{buttonText}</Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default CTA;
