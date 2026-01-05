import React from 'react'
import HomeHero from './HomeHero'
import { PageWrapper } from '../animation/PageWrapper'
import HomeAbout from './HomeAbout'
import HomeExpertise from './HomeExpertise'
import HomeProjects from './HomeProjects'
import CTA from '../common/CTA'
import HomePricing from './HomePricing'
import HomeBlog from './HomeBlog'
import Testimonials from '../common/Testimonials'

const Home = () => {
  return (
    <PageWrapper>
     <HomeHero/>
     <HomeAbout/>
     <HomeExpertise/>
     <HomeProjects/>
     <HomePricing/>
     <Testimonials className="px-5 md:px-10" />
     <HomeBlog/>
     <CTA />
    </PageWrapper>
  )
}

export default Home