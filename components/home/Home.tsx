import React from 'react'
import HomeHero from './HomeHero'
import { PageWrapper } from '../animation/PageWrapper'
import HomeAbout from './HomeAbout'
import HomeExpertise from './HomeExpertise'
import HomeProjects from './HomeProjects'
import CTA from '../common/CTA'

const Home = () => {
  return (
    <PageWrapper>
     <HomeHero/>
     <HomeAbout/>
     <HomeExpertise/>
     <HomeProjects/>
      <CTA 
      title="Let's Build Something Great"
      subtitle="Web • Apps • Brand • Strategy"
      buttonText="Work With Us"
      buttonLink="/hire"
      />
    </PageWrapper>
  )
}

export default Home