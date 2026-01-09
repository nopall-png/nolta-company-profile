"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">

      {/* === HERO IMAGE (SLOW ZOOM) === */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/about/hero.png"
          alt="About NOLTA"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* === OVERLAY FADE === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-black/40"
      />

      {/* === CONTENT === */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[1308px] px-8 flex flex-col items-center text-center gap-8">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-wide"
          >
            About Us
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
            className="text-white text-lg md:text-xl leading-relaxed max-w-[967px]"
          >
            We provide end-to-end logistics solutions designed to move goods efficiently,
            securely, and on time across every stage of the supply chain.
          </motion.p>

        </div>
      </div>

    </section>
  )
}
