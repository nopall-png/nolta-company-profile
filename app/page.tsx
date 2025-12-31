import Hero from "@/components/sections/home/Hero"
import Services from "@/components/sections/home/Services"
import AboutIntro from "@/components/sections/home/AboutIntro"
import VideoSection from "@/components/sections/home/VideoSection"
import AboutDetails from "@/components/sections/home/AboutDetails"
import ServicesDetail from "@/components/sections/home/ServicesDetail"
import Hub from "@/components/sections/home/Hub"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutIntro />
      <VideoSection />
      <AboutDetails />
      <ServicesDetail />
      <Hub />
    </>
  )
}
