"use client";
import React from 'react'
import { PageWrapper } from '../animation/PageWrapper'
import { ScrollReveal } from '../animation/ScrollReveal'
import { Button } from '../ui/Button'

const Contact = () => {
  return (
  <PageWrapper>
       <section className="px-6 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">
                Let&apos;s <br /> <span className="text-primary italic">Talk.</span>
              </h1>
            </ScrollReveal>
            <div className="space-y-12">
              <div>
                <h4 className="text-primary uppercase tracking-widest font-bold mb-4">Email Us</h4>
                <p className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors cursor-pointer">
                  hello@nous.com
                </p>
              </div>
              <div>
                <h4 className="text-primary uppercase tracking-widest font-bold mb-4">Location</h4>
                <p className="text-xl text-foreground/70 uppercase tracking-widest">
                  123 Creative Street <br />
                  Innovate City, TX 75001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-foreground/5 p-12 border border-foreground/10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-foreground/40">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors placeholder:text-foreground/10"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-foreground/40">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors placeholder:text-foreground/10"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-foreground/40">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/10 py-4 outline-none focus:border-primary transition-colors placeholder:text-foreground/10"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default Contact