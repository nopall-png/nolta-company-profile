"use client"

import { motion, Variants } from "framer-motion"

const blockVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
}

export default function AboutVisionMission() {
  return (
    <section className="w-full py-24 bg-[#ffffff]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-24">

        {/* --- MISSION BLOCK --- */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariant}
          className="flex-1 flex gap-6"
        >
          <div className="w-1.5 bg-[#DF1026] rounded-full shrink-0"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/icons/about/mission.svg"
                alt="Mission Icon"
                width={40}
                height={40}
              />
              <h3 className="text-3xl font-bold text-[#012C61]">
                Mission
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Deliver reliable, timely, and cost-effective logistics services
              Provide excellent customer service with professional handling
              Ensure safety, accuracy, and efficiency in every shipment
              Build long-term partnerships based on trust and performance
              Continuously improve through innovation and technology
            </p>
          </div>
        </motion.div>

        {/* --- VISION BLOCK --- */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blockVariant}
          className="flex-1 flex gap-6"
        >
          <div className="w-1.5 bg-[#DF1026] rounded-full shrink-0"></div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/icons/about/vision.svg"
                alt="Vision Icon"
                width={40}
                height={40}
              />
              <h3 className="text-3xl font-bold text-[#012C61]">
                Vision
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              To become a leading and trusted logistics partner, providing integrated
              and innovative transportation solutions that support business growth
              and global trade.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
