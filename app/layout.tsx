import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"
import Script from "next/script"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "NOLTA Logistics",
    template: "%s | NOLTA Logistics",
  },
  description:
    "NOLTA Logistics provides professional logistics and supply chain solutions with reliable global delivery.",
  keywords: [
    "logistics company",
    "freight forwarding",
    "supply chain solutions",
    "cargo shipping",
    "global logistics",
  ],
  openGraph: {
    title: "NOLTA Logistics",
    description:
      "Professional logistics and supply chain solutions with reliable global delivery.",
    url: "https://nolta-logistics.com",
    siteName: "NOLTA Logistics",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "NOLTA Logistics",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        
        {/* ===== ORGANIZATION SCHEMA ===== */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NOLTA Logistics",
              url: "https://nolta-logistics.com",
              logo: "https://nolta-logistics.com/images/navbar/logo.png",
              description:
                "Professional logistics and supply chain solutions with reliable global delivery.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-xxx-xxxx-xxxx",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/nolta-logistics",
                "https://www.instagram.com/nolta-logistics",
              ],
            }),
          }}
        />

        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
