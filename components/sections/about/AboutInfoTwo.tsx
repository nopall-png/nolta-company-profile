"use client"

import { motion, type Variants } from "framer-motion"

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export default function AboutInfoTwo() {
  return (
    <section className="w-full py-24 bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center gap-12">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[32px] font-bold text-[#012C61]"
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full bg-white border border-gray-200 rounded-2xl p-10 md:p-14 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

            <div className="flex flex-col gap-8">
              {[
                "Reliable and on-time delivery",
                "Experienced logistics professionals",
                "Commitment to safety and compliance",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  custom={i}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#DF1026" />
                    <path
                      d="M7 12L10.5 15.5L17 9"
                      stroke="white"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-lg font-medium text-[#1F2937]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              {[
                "Transparent shipment tracking",
                "Scalable solutions",
              ].map((text, i) => (
                <motion.div
                  key={text}
                  custom={i + 3}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#DF1026" />
                    <path
                      d="M7 12L10.5 15.5L17 9"
                      stroke="white"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-lg font-medium text-[#1F2937]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-[#012C61] text-center font-medium leading-relaxed max-w-4xl"
        >
          Logistics is more than moving goods — it is about building trust,
          maintaining continuity, and supporting long-term partnerships.
        </motion.p>

      </div>
    </section>
  )
}
