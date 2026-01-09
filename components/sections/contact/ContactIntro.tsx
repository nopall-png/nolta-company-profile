"use client"

import { motion } from "framer-motion"

export default function ContactIntro() {
  return (
    <section className="w-full py-24 overflow-hidden">
      <div className="max-w-[953px] mx-auto flex flex-col items-center gap-5">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            text-center
            text-[var(--color-primary)]
            text-5xl
            font-bold
            leading-[48px]
            font-['Poppins']
          "
        >
          Get in Touch With Our Logistics Experts
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            max-w-[768px]
            text-center
            text-black
            text-xl
            font-normal
            leading-7
            font-['Poppins']
          "
        >
          Reliable logistics solutions start with clear communication.
          Our team is ready to support your shipping and supply chain needs.
        </motion.p>

        {/* RED UNDERLINE (GROW ANIMATION) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }} // w-24 = 96px
          transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
          viewport={{ once: true }}
          className="h-1 bg-[var(--color-secondary)] rounded-full"
        />

      </div>
    </section>
  )
}
