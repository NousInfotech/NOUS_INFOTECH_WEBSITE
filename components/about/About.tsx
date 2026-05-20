"use client";
import { PageWrapper } from "@/components/animation/PageWrapper";
import AboutTimeline from "./AboutTimeline";
import AboutBanner from "./AboutBanner";
import CTA from "../common/CTA";
import Testimonials from "../common/Testimonials";
import AboutStory from "./AboutStory";
import AboutMissionVision from "./AboutMissionVision";
import AboutExpertiseSnapshot from "./AboutExpertiseSnapshot";
import AboutFaq from "./AboutFaq";
import AboutTeamCard from "./AboutTeamCard";

const About = () => {
  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 space-y-20">
        <AboutBanner />
        <AboutStory />
        <AboutMissionVision />
        <AboutTeamCard />
        <AboutExpertiseSnapshot />
        <AboutFaq />
        <Testimonials />
        <AboutTimeline />
      </section>
      <CTA />
    </PageWrapper>
  );
};

export default About;
