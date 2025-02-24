import Header from "@/components/sections/Header";
import ProductsPage_banner from '@/components/sections/ProductsPage_banner'
import P3VegetablePotato from '@/components/sections/p3vegetablepotato'
import BioPesticides from '@/components/sections/biopesticides'
import QuerySection from "@/components/sections/P3_GotAnyQuery";
import Footer from "@/components/sections/Footer";

const Products = () => {
  return (
    <>
    <Header/>
    <ProductsPage_banner/>
    <P3VegetablePotato/>
    <BioPesticides/>
    <QuerySection/>
    <Footer/>
    </>
  )
}

export default Products