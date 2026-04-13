"use client";

import React from "react";
import { PageWrapper } from "@/components/animation/PageWrapper";
import CTA from "@/components/common/CTA";
import PartnerHero from "./PartnerHero";
import PartnerWhyUs from "./PartnerWhyUs";
import PartnerReferralIntro from "./PartnerReferralIntro";
import PartnerReferralFlow from "./PartnerReferralFlow";
import PartnerReferralSplit from "./PartnerReferralSplit";
import PartnerWhyRefer from "./PartnerWhyRefer";
import PartnerWhoCanRefer from "./PartnerWhoCanRefer";
import PartnerReferralTrackTeaser from "./PartnerReferralTrackTeaser";
import PartnerReferralCTA from "./PartnerReferralCTA";

const Partners = () => {
  return (
    <PageWrapper>
      <PartnerHero />
      <PartnerWhyUs />
      <PartnerReferralIntro />
      <PartnerReferralFlow />
      <PartnerReferralSplit />
      <PartnerWhyRefer />
      <PartnerWhoCanRefer />
      <PartnerReferralTrackTeaser />
      <CTA
        title="Ready to partner?"
        subtitle="Systems, automation, and teams — let's talk scope."
        buttonText="Contact us"
        buttonLink="/partners#referral"
        className="mx-5 md:mx-10"
      />
    </PageWrapper>
  );
};

export default Partners;
