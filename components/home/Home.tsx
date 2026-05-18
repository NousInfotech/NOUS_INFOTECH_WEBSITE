import React from 'react'
import HomeHero from './HomeHero'
import { PageWrapper } from '../animation/PageWrapper'
import HomeAbout from './HomeAbout'
import HomeExpertise from './HomeExpertise'
import HomeProjects from './HomeProjects'
import CTA from '../common/CTA'
// import HomePricing from './HomePricing' // Temporarily disabled
import HomeAgency from './HomeAgency'
import HomeConsultCTA from './HomeConsultCTA'
import HomeDigitalizeDemo from './HomeDigitalizeDemo'
import HomeBlog from './HomeBlog'
import Testimonials from '../common/Testimonials'
import { CALENDLY_BOOKING_URL } from '@/lib/calendly'

const Home = () => {
  return (
    <PageWrapper>
     <HomeHero/>
     <HomeAbout/>
     <HomeExpertise/>
     <HomeAgency/>
     <HomeProjects/>
     <HomeDigitalizeDemo />
     <Testimonials className="px-5 md:px-10" />
     <HomeConsultCTA variant="compact" />
     <HomeBlog/>
     <CTA
       title="Ready to simplify your operations?"
       subtitle="Book a free consultation and discover how we can become your technology partner—from workflow automation to custom software and long-term digital growth."
       buttonText="Book a Consultation"
       buttonLink={CALENDLY_BOOKING_URL}
     />
    </PageWrapper>
  )
}

export default Home