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
      <div className="max-w-[1300px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO — MORE LEFT */}
          <Link
            href="/"
            className="flex items-center gap-4 -ml-6" // 🔥 geser ke kiri
          >
            <Image
              src="/images/navbar/logo.png"
              alt="Nolta Logo"
              width={180}
              height={80}
              priority
            />
            <span className="text-white text-3xl font-bold tracking-wide">
              NOLTA
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12 text-white text-lg font-semibold">
            <NavItem href="/" active={isActive("/")}>
              Home
            </NavItem>
            <NavItem href="/contact" active={isActive("/contact")}>
              Contact Us
            </NavItem>
            <NavItem href="/about" active={isActive("/about")}>
              About Us
            </NavItem>
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

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </nav>
  )
}

/* ===============================
   NAV ITEM
================================ */
function NavItem({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <Link href={href} className="pb-1 block">
        {children}
      </Link>
      <span
        className={`absolute left-0 -bottom-2 h-[3px] bg-red-600 rounded-full transition-all duration-300
          ${active ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
      />
    </div>
  )
}
