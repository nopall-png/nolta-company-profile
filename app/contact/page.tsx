import type { Metadata } from "next"

import ContactHero from "@/components/sections/contact/ContactHero"
import ContactIntro from "@/components/sections/contact/ContactIntro"
import GetInTouch from "@/components/sections/contact/GetInTouch"
import ContactInfo from "@/components/sections/contact/ContactInfo"
import ContactInfoTwo from "@/components/sections/contact/ContactInfoTwo"

export const metadata: Metadata = {
  title: "Contact Us – NOLTA Logistics",
  description:
    "Get in touch with NOLTA Logistics for reliable global shipping, freight forwarding, and supply chain solutions. Our logistics experts are ready to assist you.",
  keywords: [
    "contact logistics company",
    "contact NOLTA Logistics",
    "freight forwarding contact",
    "global shipping support",
    "logistics customer service",
  ],
  openGraph: {
    title: "Contact NOLTA Logistics",
    description:
      "Reach out to NOLTA Logistics for professional logistics, cargo shipping, and supply chain support worldwide.",
    url: "https://nolta-logistics.com/contact",
    siteName: "NOLTA Logistics",
    images: [
      {
        url: "/images/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact NOLTA Logistics",
      },
    ],
    type: "website",
  },
}

export default function ContactPage() {
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
                name: "Contact Us",
                item: "https://nolta-logistics.com/contact",
              },
            ],
          }),
        }}
      />

      <ContactHero />
      <ContactIntro />
      <ContactInfo />
      <GetInTouch />
      <ContactInfoTwo />
    </>
  )
}
