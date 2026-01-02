"use client";

import { packages } from '@/lib/data'
import { ScrollReveal } from '../animation/ScrollReveal'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '../ui/Button'
import Link from 'next/link'

const PricingCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {packages.map((pkg, i) => (
        <ScrollReveal key={pkg.name} delay={i * 0.1}>
          <div
            className={`group relative h-full p-8 md:p-10 border rounded-3xl transition-all duration-500 overflow-hidden ${
              pkg.popular
                ? "bg-foreground text-background"
                : "bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10"
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-6 right-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-black rounded-full shadow-lg">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Most Popular</span>
                </div>
              </div>
            )}

            <div className="mb-10">
              <h3 className={`text-2xl font-black uppercase mb-2 ${pkg.popular ? "text-primary" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter">
                  {pkg.price}
                </span>
                <span className={`text-xs uppercase font-bold tracking-widest ${pkg.popular ? "opacity-60" : "opacity-30"}`}>
                  / Project
                </span>
              </div>
              <p className={`mt-4 text-sm leading-relaxed ${pkg.popular ? "opacity-70" : "opacity-50"}`}>
                {pkg.description}
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {pkg.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? "bg-primary text-black" : "bg-primary/20 text-primary"}`}>
                    <Check className="w-3 h-3 stroke-4" />
                  </div>
                  <span className={`text-sm font-medium ${pkg.popular ? "opacity-90" : "opacity-80"}`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link href={`/contact?plan=${encodeURIComponent(pkg.name)}`} className="block w-full">
              <Button
                variant={pkg.popular ? "primary" : "outline"}
                className={`w-full group/btn ${
                  pkg.popular ? "bg-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary" : ""
                }`}
              >
                {pkg.buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

export default PricingCard
