"use client"

import { motion } from "framer-motion"

export default function AboutTeam() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* === LEFT: IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="w-full lg:w-1/2 h-[300px] lg:h-[480px] relative overflow-hidden rounded-lg shadow-sm"
        >
          <img
            src="/images/about/ourteam.png"
            alt="Our Team meeting in office"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* === RIGHT: TEXT === */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[32px] font-bold text-[#012C61]"
          >
            Our Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-black leading-relaxed"
          >
            Behind every successful delivery is a team that cares. Our people bring
            expertise, integrity, and accountability to every shipment, working together
            to build long-term partnerships and deliver consistent results for our clients.
          </motion.p>

        </div>

      </div>
    </section>
  )
}
