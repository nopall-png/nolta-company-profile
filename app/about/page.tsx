import type { Metadata } from "next"

import AboutHero from "@/components/sections/about/AboutHero"
import AboutInfoOne from "@/components/sections/about/AboutInfoOne"
import AboutServices from "@/components/sections/about/AboutServices"
import AboutVisionMission from "@/components/sections/about/AboutVisionMission"
import AboutInfoTwo from "@/components/sections/about/AboutInfoTwo"
import AboutTeam from "@/components/sections/about/AboutTeam"

export const metadata: Metadata = {
  title: "About Us – NOLTA Logistics",
  description:
    "Learn more about NOLTA Logistics, a trusted logistics company delivering end-to-end supply chain solutions with efficiency, security, and global reach.",
  keywords: [
    "about NOLTA Logistics",
    "logistics company profile",
    "global logistics provider",
    "supply chain solutions company",
    "freight forwarding company",
  ],
  openGraph: {
    title: "About NOLTA Logistics",
    description:
      "Discover how NOLTA Logistics delivers reliable, secure, and efficient logistics solutions across global supply chains.",
    url: "https://nolta-logistics.com/about",
    siteName: "NOLTA Logistics",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "About NOLTA Logistics",
      },
    ],
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* ✅ Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nolta-logistics.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://nolta-logistics.com/about",
              },
            ],
          }),
        }}
      />

      <AboutHero />
      <AboutInfoOne />
      <AboutServices />
      <AboutVisionMission />
      <AboutInfoTwo />
      <AboutTeam />
    </>
  )
}
