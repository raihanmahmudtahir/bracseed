import React from 'react'
import Header from '@/components/sections/Header'
import FounderMessage from '@/components/sections/FounderMessage'
import VisionMission from '@/components/sections/Vision&Mission'
import TheJourney from '@/components/sections/TheJourney'
import Achievements from '@/components/sections/Achievements'
import Leadership from '@/components/sections/Leadership'
import ExecutiveTeam from '@/components/sections/Executive'
import AboutSection from '@/components/sections/WhoWeAre'
import TestimonialSlider from '@/components/sections/Echo'
import Footer from '@/components/sections/Footer'


const About = () => {
    return (
      <div>
        <Header/>
        <AboutSection/>
        <FounderMessage/>
        <VisionMission/>
        <TheJourney/>
        <Leadership/>
        <ExecutiveTeam/>
        <Achievements/>
        <TestimonialSlider/>
        <Footer/>
        
        
      </div>
    )
  }
  
  export default About