import React from 'react'
import RisingBanner from '@/components/sections/RisingBanner'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import RisingBannerUnder from '@/components/sections/RisingBannerUnder'
import AgriculturalMilestones from '@/components/sections/AgriculturalMilestones'
import AgriculturalMilestonesUnder from '@/components/sections/AgriculturalMilestonesUnder'
import FarmersDiary from '@/components/sections/FarmersDiary'
import Photos from '@/components/sections/Photos'
import Videos from '@/components/sections/Videos'

const News_and_Events = () => {
  return (
    <>
    <Header/>
    <RisingBanner/>
    <RisingBannerUnder/>
    <AgriculturalMilestones/>
    <AgriculturalMilestonesUnder/>
    <FarmersDiary/>
    <Photos/>
    <Videos/>
    <Footer/>
    </>
  )
}

export default News_and_Events