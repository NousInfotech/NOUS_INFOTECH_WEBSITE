"use client"
import React from "react";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import ContactForm from "./Contact";
import { cn } from "@/lib/utils";
import { FormProvider, useFormContext } from "@/context/FormContext";
import { FormPayload } from "@/api/sendFormData";

interface SectionData {
  title: string;
  items: string[];
  type: "category" | "budget" | "role" | "type";
}

interface InquiryLayoutProps {
  heroTitle: React.ReactNode;
  heroDescription: string;
  sidebarSubtitle: React.ReactNode;
  sidebarDescription: string;
  sections: SectionData[];
  submitText: string;
  onSubmitFn?: (payload: FormPayload) => Promise<void>;
}

const InquiryContent = ({
  heroTitle,
  heroDescription,
  sidebarSubtitle,
  sidebarDescription,
  sections,
  submitText,
  onSubmitFn,
}: InquiryLayoutProps) => {
  const { state, setCategory, setBudget, setRole, setType } = useFormContext();

  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 md:py-20">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-center mb-5">
              {heroTitle}
            </h1>
            <p className="text-foreground/40 text-sm">
              {heroDescription}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <ScrollReveal>
              <div>
                <h3 className="md:text-3xl text-xl font-black uppercase mb-5 border-l-4 border-primary pl-6">
                  {sidebarSubtitle}
                </h3>
                <p className="text-foreground/50 leading-relaxed">
                  {sidebarDescription}
                </p>
              </div>
            </ScrollReveal>
            
            {sections.map((section, idx) => {
              const selectedItem = 
                section.type === "category" ? state.category : 
                section.type === "budget" ? state.budget :
                section.type === "role" ? state.role : state.type;

              const onSelect = 
                section.type === "category" ? setCategory : 
                section.type === "budget" ? setBudget :
                section.type === "role" ? setRole : setType;
              
              return (
                <section key={idx}>
                  <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-5">
                    {section.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {section.items.map((item) => (
                      <button 
                        key={item}
                        onClick={() => onSelect(selectedItem === item ? "" : item)}
                        className={cn(
                          "px-6 py-2 border transition-all text-sm md:text-[20px] font-medium uppercase tracking-widest whitespace-nowrap",
                          selectedItem === item 
                            ? "bg-primary text-white border-primary" 
                            : "border-foreground/10 text-foreground/70 hover:border-primary hover:text-primary"
                        )}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <ContactForm submitText={submitText} onSubmitFn={onSubmitFn} />
        </div>
      </section>
    </PageWrapper>
  );
};

const InquiryLayout = (props: InquiryLayoutProps) => {
  return (
    <FormProvider>
      <InquiryContent {...props} />
    </FormProvider>
  );
};

export default InquiryLayout;
