"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactHero() {
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
          src="/images/contact/hero.png"
          alt="Contact Us Hero"
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-white text-5xl md:text-6xl font-bold tracking-wide"
        >
          Contact Us
        </motion.h1>
      </div>

    </section>
  )
}
