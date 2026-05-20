"use client";
import Link from "next/link";
import CalendlyLink from "../common/CalendlyLink";
import { PageWrapper } from '../animation/PageWrapper'
import { ScrollReveal } from '../animation/ScrollReveal'
import ContactForm from '../common/Contact';
import { FormProvider } from '@/context/FormContext';

const Contact = () => {
  return (
    <FormProvider>
      <PageWrapper>
       <section className="md:px-10 px-5 mx-auto py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className='flex flex-col gap-12 items-start'>
            <ScrollReveal>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Get In Touch</span>
                </div>
                
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter">
                  Let&apos;s discuss your{" "}
                  <span className="text-primary">digital future.</span>
                </h1>
                
                <p className="text-sm md:text-base text-foreground/50 max-w-md leading-relaxed">
                  Book a consultation to explore digital transformation, workflow
                  automation, or a custom project. Tell us what&apos;s slowing your
                  business down—we&apos;ll help you see a clearer path forward.
                </p>
                <CalendlyLink className="inline-flex text-sm font-medium text-primary hover:underline">
                  Schedule on Calendly →
                </CalendlyLink>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full pt-8 border-t border-foreground/50 items-center">
              <ScrollReveal delay={0.2}>
                <div>
                  <h4 className="text-sm text-primary font-bold mb-2">Email</h4>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nousinfotechq@gmail.com.com&su=Business%20Inquiry&body=Hello%20Suhail,%0A%0AI%20would%20like%20to%20connect." 
                    className="text-xl font-medium hover:text-primary duration-300 transition-all"
                    target="_blank"
                  >
                    nousinfotechq@gmail.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <h4 className="text-sm text-primary font-bold mb-2">Location</h4>
                  <p className="text-lg text-foreground/60">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.6}>
            <div className="relative">
              {/* Decorative background element for the form */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10 opacity-50" />
              <ContactForm submitText="Send Message"/>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
    </FormProvider>
  );
}

export default Contact