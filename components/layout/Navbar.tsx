"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1308px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center pl-[61px] mr-auto">
            <Image
              src="/images/navbar/logo.png"
              alt="Nolta Logo"
              width={200}
              height={200}
              priority
              className="object-contain"
            />

            <span className="ml-[14px] text-white text-4xl font-bold tracking-wide">
              NOLTA
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-white text-[28px] font-regular">

            {/* HOME */}
            <div className="relative flex flex-col items-center">
              <Link href="/" className="pb-3">
                Home
              </Link>
              <span
                className={`absolute bottom-0 h-[5px] bg-red-600 rounded-xl transition-all duration-300
                  ${isActive("/") ? "w-16 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </div>

            {/* CONTACT */}
            <div className="relative flex flex-col items-center">
              <Link href="/contact" className="pb-3">
                Contact Us
              </Link>
              <span
                className={`absolute bottom-0 h-[5px] bg-red-600 rounded-xl transition-all duration-300
                  ${isActive("/contact") ? "w-20 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </div>

            {/* ABOUT */}
            <div className="relative flex flex-col items-center">
              <Link href="/about" className="pb-3">
                About Us
              </Link>
              <span
                className={`absolute bottom-0 h-[5px] bg-red-600 rounded-xl transition-all duration-300
                  ${isActive("/about") ? "w-16 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </div>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </nav>
  )
}
