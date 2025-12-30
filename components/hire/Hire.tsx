"use client"
import { useState } from "react";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import ContactForm from "../common/Contact";
import { cn } from "@/lib/utils";

const categories = ["Web Development", "UI/UX Design", "Branding", "Mobile App", "Other"];
const budgets = ["₹50k - ₹1L", "₹1L - ₹2.5L", "₹2.5L - ₹5L", "₹5L+"];

const Hire = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 md:py-20">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-center mb-2">
              Hire <span className="text-primary">Us</span>
            </h1>
            <p className="text-foreground/40 text-sm">
              Describe your custom project and let&apos;s build something extraordinary together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <ScrollReveal>
              <div>
                <h3 className="md:text-3xl text-xl font-black uppercase mb-5 border-l-4 border-primary pl-6">
                  Custom <span className="text-primary">Inquiry</span>
                </h3>
                <p className="text-foreground/50 leading-relaxed">
                  Have a specific project in mind that doesn&apos;t fit into our standard packages? Tell us about it below.
                </p>
              </div>
            </ScrollReveal>
            <section>
              <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-5">Service Categories</h4>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-6 py-2 border transition-all md:text-[20px] font-bold uppercase tracking-widest whitespace-nowrap",
                      selectedCategory === cat 
                        ? "bg-primary text-black border-primary" 
                        : "border-foreground/10 text-foreground/70 hover:border-primary hover:text-primary"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-5">Estimated Budget</h4>
              <div className="flex flex-wrap gap-3">
                {budgets.map((budget) => (
                  <button 
                    key={budget}
                    onClick={() => setSelectedBudget(budget)}
                    className={cn(
                      "px-6 py-2 border transition-all md:text-[20px] font-bold uppercase tracking-widest whitespace-nowrap",
                      selectedBudget === budget 
                        ? "bg-primary text-black border-primary" 
                        : "border-foreground/10 text-foreground/70 hover:border-primary hover:text-primary"
                    )}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </section>
          </div>

          <ContactForm 
            submitText="Submit Inquiry" 
          />
        </div>
      </section>
    </PageWrapper>
  );
}

export default Hire

