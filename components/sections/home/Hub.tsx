"use client"

import Image from "next/image"
// Tambahkan 'Variants' ke dalam import
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion"
import { MouseEvent } from "react"

export default function StoriesHubCTA() {
  // --- LOGIC 3D TILT EFFECT ---
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"])
  
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseXPos = (e.clientX - rect.left) / width - 0.5
    const mouseYPos = (e.clientY - rect.top) / height - 0.5

    x.set(mouseXPos)
    y.set(mouseYPos)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  // --- SOLUSI ERROR TYPESCRIPT ---
  // 1. Tambahkan tipe ': Variants'
  // 2. Tambahkan 'as const' pada ease
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  }

  return (
    <section className="w-full bg-[#001a3d] overflow-hidden relative">
      
      {/* DEKORASI BACKGROUND */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 py-24 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* === LEFT CONTENT (TEXT) === */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col gap-8 text-white max-w-[480px]"
          >
            <motion.h2 variants={textVariants} className="text-3xl md:text-4xl font-bold leading-tight">
              NOLTA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Stories Hub
              </span>
            </motion.h2>

            <motion.p variants={textVariants} className="text-base md:text-lg leading-relaxed text-blue-100/80 font-light">
              From seamless logistics solutions to smart supply chain innovations,
              discover how NOLTA is enabling efficient, reliable, and sustainable
              cargo movement across global networks.
            </motion.p>

            <motion.div variants={textVariants}>
              {/* BUTTON SHINY */}
              <button className="group relative px-8 py-4 bg-[var(--color-secondary)] rounded-full text-white text-sm font-semibold overflow-hidden shadow-lg hover:shadow-red-900/50 transition-all duration-300 transform hover:-translate-y-1">
                <span className="relative z-10 tracking-wider">EXPLORE MORE</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-red-700/50" />
                <div className="absolute top-0 -left-[100%] h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[100%]" />
              </button>
            </motion.div>
          </motion.div>

          {/* === RIGHT IMAGE (3D INTERACTIVE TILT) === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[300px] md:h-[360px] flex items-center justify-center perspective-1000"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full rounded-3xl cursor-pointer"
            >
              
              {/* IMAGE WRAPPER (TANPA BADGE GROWTH) */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/images/home/stories.png"
                  alt="NOLTA Stories Hub"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a3d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* DYNAMIC LIGHT SHEEN */}
                <motion.div 
                   style={{
                     background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.2), transparent 40%)`
                   }}
                   className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
                />
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}