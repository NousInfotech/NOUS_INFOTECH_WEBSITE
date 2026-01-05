"use client";
import { PageWrapper } from "@/components/animation/PageWrapper";
import AboutTimeline from "./AboutTimeline";
import AboutBanner from "./AboutBanner";
import AboutTeamCard from "./AboutTeamCard";
import CTA from "../common/CTA";
import Testimonials from "../common/Testimonials";
import AboutStory from "./AboutStory";
const About = () => {
  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 space-y-20">
        <AboutBanner />
        <AboutTeamCard/>
        <AboutStory/>
        <Testimonials />
        <AboutTimeline />
      </section>
       <CTA/>
    </PageWrapper>
  );
}

export default About;
