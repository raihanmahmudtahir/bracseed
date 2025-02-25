import React from 'react'
import AvailableJobs from '@/components/sections/AvailableJobs'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import JoinTeamBanner from '@/components/sections/JoinTeamBanner'
const Join_the_Team = () => {
  return (
    <>
    <Header/>
    <JoinTeamBanner/>
    <AvailableJobs/>
    <Footer/>
    </>
  )
}

export default Join_the_Team