import type { Metadata } from "next"

import Hero from "@/components/sections/home/Hero"
import Services from "@/components/sections/home/Services"
import AboutIntro from "@/components/sections/home/AboutIntro"
import AboutInfoOne from "@/components/sections/home/AboutInfoOne"
import AboutVisionMission from "@/components/sections/home/AboutVisionMission"
import VideoSection from "@/components/sections/home/VideoSection"
import AboutDetails from "@/components/sections/home/AboutDetails"
import Hub from "@/components/sections/home/Hub"

export const metadata: Metadata = {
  title: "Global Logistics & Supply Chain Solutions",
  description:
    "NOLTA Logistics provides end-to-end logistics, freight forwarding, and supply chain solutions to move your cargo efficiently, securely, and on time worldwide.",
  keywords: [
    "logistics company",
    "global logistics",
    "freight forwarding",
    "cargo shipping",
    "supply chain solutions",
    "international logistics",
  ],
  openGraph: {
    title: "NOLTA Logistics – Global Logistics & Supply Chain Solutions",
    description:
      "End-to-end logistics and supply chain solutions designed for global efficiency, security, and reliability.",
    url: "https://nolta-logistics.com",
    siteName: "NOLTA Logistics",
    images: [
      {
        url: "/images/og-home.png", // optional tapi disarankan
        width: 1200,
        height: 630,
        alt: "NOLTA Logistics Global Shipping",
      },
    ],
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutInfoOne />
      <AboutVisionMission />
      <AboutIntro />
      <VideoSection />
      <AboutDetails />
      <Services />
      <Hub />
    </>
  )
}
