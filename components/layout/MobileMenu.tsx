"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

// --- CONFIG ANIMASI CINEMATIC ---
const menuVariants: Variants = {
  initial: { opacity: 0, clipPath: "circle(0% at 100% 0%)" }, // Efek bukaan melingkar dari pojok kanan atas
  animate: { 
    opacity: 1, 
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  },
  exit: { 
    opacity: 0, 
    clipPath: "circle(0% at 100% 0%)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }
}

const containerVars: Variants = {
  initial: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.2, staggerChildren: 0.1, staggerDirection: 1 } }
}

// Efek Blur-to-Clear (Sangat Modern)
const linkVars: Variants = {
  initial: { 
    y: 50, 
    opacity: 0, 
    filter: "blur(10px)", // Mulai dari buram
    transition: { duration: 0.5, ease: "linear" } 
  },
  open: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)", // Menjadi jelas
    transition: { duration: 0.8, ease: [0, 0.55, 0.45, 1] as const } 
  }
}

const mapVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, rotate: -10 },
  animate: { 
    opacity: 0.05, // Sangat tipis (watermark)
    scale: 1, 
    rotate: 0,
    transition: { duration: 1.5, ease: "easeOut" } 
  }
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // State untuk efek Spotlight (Focus)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const menuItems = [
    { 
      href: "/", 
      label: "Home", 
      desc: "Main Dashboard", // Deskripsi kecil tambahan
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: "/about", 
      label: "About Us", 
      desc: "Company Profile",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      href: "/contact", 
      label: "Contact Us", 
      desc: "Get in Touch",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          // GRADIENT BACKGROUND: Memberikan kedalaman (tidak flat)
          className="fixed inset-0 w-full h-[100dvh] bg-gradient-to-br from-[#00243D] to-[#000F1A] z-[999] flex flex-col justify-between px-6 py-8 overflow-hidden"
        >
          
          {/* === BACKGROUND DECORATION (WORLD MAP SVG) === */}
          {/* Ini memberikan kesan "Global Logistics" yang mahal secara instan */}
          <motion.div 
            variants={mapVariants}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0"
          >
             <svg viewBox="0 0 100 100" fill="white" className="w-full h-full opacity-10">
                {/* Abstract Dots World Map Pattern */}
                <path d="M20,50 Q40,10 60,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                <path d="M10,30 Q50,70 90,30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="20" cy="50" r="1" />
                <circle cx="60" cy="50" r="1" />
                <circle cx="80" cy="20" r="1" />
                <circle cx="40" cy="80" r="1" />
                {/* Tambahkan elemen dekoratif peta abstrak */}
                <path d="M10 40 L 20 20 L 40 25 L 50 10 L 80 15 L 90 40 L 80 60 L 50 80 L 20 70 Z" fill="none" stroke="white" strokeWidth="0.2" opacity="0.5" />
             </svg>
             {/* Glow Effect di tengah */}
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
          </motion.div>

          {/* === 1. HEADER === */}
          <div className="flex items-center justify-end w-full relative z-10">
            <button 
              onClick={onClose}
              className="group relative text-white p-2 focus:outline-none"
              aria-label="Close Menu"
            >
              {/* Lingkaran border yang berputar saat hover */}
              <span className="absolute inset-0 border border-white/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300" />
              <svg className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* === 2. CENTER (MENU ITEMS) === */}
          <motion.div 
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex flex-col items-start justify-center gap-6 pl-2 relative z-10 w-full"
          >
            {/* GARIS VERTIKAL DEKORATIF */}
            <motion.div 
               initial={{ height: 0 }} 
               animate={{ height: "100%", transition: { delay: 0.5, duration: 1 } }} 
               className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" 
            />

            {menuItems.map((link, index) => (
              <div 
                key={index} 
                className="relative group w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div 
                  variants={linkVars}
                  // LOGIC FOCUS: Jika ada item yang di-hover, item lain jadi blur & transparan
                  className={`flex items-center gap-6 transition-all duration-500 ease-out cursor-pointer
                    ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 blur-[2px] scale-95" : "opacity-100 scale-100"}
                  `}
                >
                  <Link href={link.href} onClick={onClose} className="flex items-center gap-5 w-full">
                    
                    {/* IKON: Dengan Background Circle */}
                    <div className={`
                      flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                      group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300
                    `}>
                      <div className="text-white">
                        {link.icon}
                      </div>
                    </div>
                    
                    {/* TEXT WRAPPER */}
                    <div className="flex flex-col">
                      <span className="text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
                        {link.label}
                      </span>
                      {/* Sub-text kecil untuk kesan mewah */}
                      <span className="text-xs text-white/40 font-light tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {link.desc}
                      </span>
                    </div>

                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
          
          {/* === 3. FOOTER === */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }}
            className="w-full border-t border-white/10 pt-6 flex flex-col gap-2 relative z-10"
          >
             <div className="flex justify-between items-end text-white/60 text-sm font-light">
               <div>
                  <p className="font-medium text-white mb-1">Jakarta HQ</p>
                  <p>Jl. Jendral Sudirman No. 1</p>
               </div>
               <div className="text-right">
                  <p className="font-medium text-white mb-1">Contact</p>
                  <p className="hover:text-white transition-colors cursor-pointer">info@nolta.com</p>
               </div>
             </div>
             
             {/* Running Text / Slogan Kecil */}
             <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.3em] mt-4">
               Global Ocean Freight Solutions
             </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}