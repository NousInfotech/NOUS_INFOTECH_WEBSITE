"use client";

import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/Button";

import { ArrowRight, Check } from "lucide-react";

const categories = ["Web Development", "UI/UX Design", "Branding", "Mobile App", "Other"];
const budgets = ["₹50k - ₹1L", "₹1L - ₹2.5L", "₹2.5L - ₹5L", "₹5L+"];

const packages = [
  {
    name: "Basic",
    price: "₹4999",
    description: "Perfect for startups and simple digital presence.",
    features: [
      "Single Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "2 Rounds of Revisions",
    ],
    buttonText: "Start Basic Plan",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹14999",
    description: "The complete solution for growing businesses.",
    features: [
      "Up to 5 Pages",
      "Custom UI/UX Design",
      "CMS Integration",
      "Speed Optimization",
      "Advanced SEO",
      "5 Rounds of Revisions",
    ],
    buttonText: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹19999",
    description: "Enterprise-grade digital experiences.",
    features: [
      "Fully Custom Web App",
      "E-commerce Functionality",
      "Premium Animations",
      "Database Integration",
      "Priority 24/7 Support",
      "Unlimited Revisions",
    ],
    buttonText: "Get Premium",
    popular: false,
  },
];

const Hire = () => {
  return (
    <PageWrapper>
      <section className="px-6 max-w-7xl mx-auto py-20">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-foreground">
              Hire <span className="text-primary">Us</span>
            </h1>
            <p className="text-foreground/40 uppercase tracking-widest text-sm max-w-xl mx-auto">
              Choose a plan that fits your vision or describe your custom project.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.1}>
            <div
                className={`group relative h-full p-8 md:p-10 border rounded-3xl transition-all duration-500 overflow-hidden ${
                  pkg.popular
                    ? "bg-foreground text-background border-primary scale-105 z-10 shadow-2xl shadow-primary/20"
                    : "bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none z-20">
                    <div className="bg-primary text-black text-[9px] font-black uppercase tracking-widest py-2 w-[150%] absolute top-5 -right-[30%] rotate-45 text-center shadow-xl">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-10">
                  <h3 className={`text-2xl font-black uppercase mb-2 ${pkg.popular ? "text-primary" : "text-foreground"}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">
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

                <Button
                  variant={pkg.popular ? "primary" : "outline"}
                  className={`w-full group/btn ${
                    pkg.popular ? "bg-primary text-black hover:bg-white border-primary" : ""
                  }`}
                >
                  {pkg.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2 space-y-16">
            <ScrollReveal>
              <div>
                <h3 className="text-3xl font-black uppercase mb-8 border-l-4 border-primary pl-6">
                  Custom <br /> <span className="text-primary italic">Inquiry</span>
                </h3>
                <p className="text-foreground/50 leading-relaxed">
                  Have a specific project in mind that doesn&apos;t fit into our standard packages? Tell us about it below.
                </p>
              </div>
            </ScrollReveal>

            <section>
              <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">Service Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    className="px-6 py-2 border border-foreground/10 hover:border-primary hover:text-primary transition-all text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-6">Estimated Budget</h4>
              <div className="flex flex-wrap gap-2">
                {budgets.map((budget) => (
                  <button 
                    key={budget}
                    className="px-6 py-2 border border-foreground/10 hover:border-primary hover:text-primary transition-all text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-foreground/5 p-8 md:p-12 border border-foreground/10">
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-primary">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-primary">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors font-medium resize-none"
                    placeholder="Tell us about your project goals, timeline, and requirements..."
                  />
                </div>

                <div className="pt-6">
                  <Button size="lg" className="w-full h-16 text-lg font-black uppercase tracking-widest">
                    Submit Inquiry
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Hire

