"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Deteksi Scroll untuk efek "Sticky & Blur"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <div className="relative flex flex-col items-center group">
      <Link href={href} className="pb-2 hover:text-gray-300 transition-colors duration-300">
        {label}
      </Link>
      <span
        className={`absolute bottom-0 h-[3px] bg-red-600 rounded-full transition-all duration-500 ease-out
          ${isActive(href) ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}
        `}
      />
    </div>
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent
          ${
            scrolled
              ? "bg-[#001524]/90 backdrop-blur-md shadow-lg py-0 border-white/10" // Tampilan saat di-scroll (Gelap, Blur, Padat)
              : "bg-transparent py-4" // Tampilan awal (Transparan, Lega)
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
          <div className="flex items-center justify-between h-20">
            
            {/* --- LOGO SECTION --- */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              {/* Logo Container: Transisi ukuran halus saat scroll */}
              <div 
                className={`relative overflow-hidden flex-shrink-0 transition-all duration-500
                  ${scrolled ? "w-28 h-12 md:w-32 md:h-14" : "w-24 h-12 md:w-36 md:h-16"}
                `}
              >
                <Image
                  src="/images/navbar/logo.png"
                  alt="Nolta Logo"
                  fill
                  priority
                  // Teknik Crop Kiri & Atas Bawah (object-right)
                  className="object-cover object-right transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Teks NOLTA: Transisi ukuran font saat scroll */}
              <span 
                className={`text-white font-bold tracking-wide transition-all duration-500
                  ${scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}
                `}
              >
                NOLTA
              </span>
            </Link>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12 text-white text-[17px] font-medium tracking-wide">
              <NavLink href="/" label="Home" />
              <NavLink href="/contact" label="Contact Us" />
              <NavLink href="/about" label="About Us" />
            </div>

            {/* --- MOBILE HAMBURGER BUTTON --- */}
            <button
              className="md:hidden text-white p-2 focus:outline-none z-50"
              onClick={() => setMenuOpen(true)} // Logic diubah: tombol navbar hanya membuka
              aria-label="Open Menu"
            >
               {/* Ikon Menu Modern */}
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
               </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU COMPONENT --- */}
      {/* Kita passing logic state ke komponen */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  )
}