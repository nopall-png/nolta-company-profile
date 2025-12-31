import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "NOLTA Logistics",
  description: "Professional logistics and supply chain solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  )
}
