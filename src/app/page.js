import Header from "@/components/sections/Header"
import Banner from "@/components/sections/Banner"
import BannerBottom from "@/components/sections/BannerBottom"
import Purpose from "@/components/sections/Purpose"
import Innovations from "@/components/sections/Innovations"
import FeaturedProducts from "@/components/sections/FeaturedProducts"
import ProductionCenters from "@/components/sections/ProductionCenters"
import OurPartners from "@/components/sections/OurPartners"
import Footer from "@/components/sections/Footer"



const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <BannerBottom/>
      <Purpose />
      <ProductionCenters/>
      <Innovations/>
      <FeaturedProducts/>
      <OurPartners/>
      <Footer/>
    </>
  )
}

export default Home