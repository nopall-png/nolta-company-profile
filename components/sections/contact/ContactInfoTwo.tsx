"use client"

import { motion } from "framer-motion"

export default function ContactInfoTwo() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      {/* WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full relative"
      >

        {/* ANIMATED RED LINE */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute left-0 top-0 w-[4px] bg-[var(--color-secondary)]"
        />

        {/* CONTENT */}
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-800 leading-7 max-w-[805px]"
          >
            Operating globally with reliable logistics partners, ensuring efficiency,
            safety, and on-time delivery across supply chains.
          </motion.p>
        </div>

      </motion.div>
    </section>
  )
}
