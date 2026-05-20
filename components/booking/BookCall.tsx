"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import CalendlyEmbed from "@/components/common/CalendlyEmbed";
import { Badge } from "@/components/ui/Badge";
import { getCalendlyUrlForInquiry } from "@/lib/calendly";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function BookCallContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const isDemo = type?.toLowerCase().includes("demo") || type?.toLowerCase().includes("digitalize");
  const calendlyUrl = getCalendlyUrlForInquiry(type);

  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 md:py-16 max-w-5xl">
        <ScrollReveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="text-center mb-10 space-y-4">
            <Badge>{isDemo ? "Private Demo" : "Schedule a Call"}</Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
              {isDemo ? (
                <>
                  Book a{" "}
                  <span className="text-primary">digitalization demo</span>
                </>
              ) : (
                <>
                  Book a{" "}
                  <span className="text-primary">consultation</span>
                </>
              )}
            </h1>
            <p className="text-sm md:text-lg text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
              {isDemo
                ? "Pick a time that works for you. On the call we'll walk through NDA-protected firm digitalization projects and what's possible for your business."
                : "Pick a time that works for you. We'll discuss your goals, operations, and how we can help as your technology partner."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <CalendlyEmbed url={calendlyUrl} minHeight={700} />
        </ScrollReveal>

        <p className="text-center text-xs text-foreground/40 mt-6">
          Prefer email instead?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Send us a message
          </Link>
        </p>
      </section>
    </PageWrapper>
  );
}

export default function BookCall() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-foreground/50">
          Loading scheduler…
        </div>
      }
    >
      <BookCallContent />
    </Suspense>
  );
}
