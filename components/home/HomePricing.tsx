import React from 'react'
import PricingCard from '../common/PricingCard'
import { Badge } from '../ui/Badge'
import { ScrollReveal } from '../animation/ScrollReveal'

const HomePricing = () => {
  return (
    <section className="py-10 px-5 md:px-10 relative overflow-hidden bg-background">
      <div className="mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-12 px-2">
            <Badge>Pricing Plans</Badge>
            <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tighter">
              Transparent options for <span className="text-primary">your scale.</span>
            </h2>
          </div>
        </ScrollReveal>
        
        <PricingCard />
      </div>
    </section>
  )
}

export default HomePricing