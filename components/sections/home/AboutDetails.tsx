"use client"

import { motion } from "framer-motion"

export default function AboutDetailSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center">

        <div className="max-w-[900px] flex flex-col items-center gap-8">

          {/* TITLE + UNDERLINE */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Judul Animasi Fade Up */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="text-[32px] font-bold text-center leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Logistics services and solutions
            </motion.h2>

            {/* RED UNDERLINE ANIMATION (Growing Bar) */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "10rem" }} // w-40 = 160px
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" as const }}
              viewport={{ once: true }}
              className="h-1 bg-[var(--color-secondary)] rounded-full" 
            />
          </div>

          {/* DESCRIPTION ANIMATION */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-lg leading-relaxed"
            style={{ color: "var(--color-primary)" }}
          >
            Regardless of your industry, your commodity, or your key markets,{" "}
            Nolta offers global and local logistics solutions that enable small
            and large businesses to grow.
          </motion.p>

        </div>
      </div>
    </section>
  )
}