"use client";

import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const statuses = ["Pending", "In progress", "Closed"] as const;

const PartnerReferralTrackTeaser = () => {
  return (
    <section className="px-5 md:px-10 pb-12 md:pb-16">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto rounded-2xl border border-dashed border-primary/35 bg-primary/[0.06] dark:bg-primary/[0.08] p-6 md:p-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
            Coming soon
          </p>
          <h3 className="text-xl md:text-2xl font-medium mb-2">
            Track your referrals
          </h3>
          <p className="text-sm text-foreground/60 mb-6 font-light">
            A dashboard for referral status and earnings — built for partners
            who scale with us.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {statuses.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 border border-foreground/10 text-foreground/75"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs text-foreground/45">
            Referral status · Pipeline view · Earnings tracker
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default PartnerReferralTrackTeaser;
