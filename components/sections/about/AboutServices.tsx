"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export default function AboutServices() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-12">

        {/* === TITLE === */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[32px] font-bold text-[#012C61]"
        >
          What We Do
        </motion.h2>

        {/* === GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              icon: "/icons/about/transport.svg",
              title: "Freight & Transportation",
              desc: "Efficient land, sea, and air freight solutions optimized for reliability and cost efficiency.",
            },
            {
              icon: "/icons/about/warehouse.svg",
              title: "Warehousing & Distribution",
              desc: "Secure storage, inventory management, and streamlined distribution operations.",
            },
            {
              icon: "/icons/about/supply.svg",
              title: "Supply Chain Optimization",
              desc: "Strategic planning and tracking to improve visibility, reduce delays, and increase performance.",
            },
            {
              icon: "/icons/about/distribution.svg",
              title: "Distribution",
              desc: "End-to-end distribution services ensuring fast and efficient product flow through last-mile delivery.",
            },
            {
              icon: "/icons/about/freight.svg",
              title: "Freight Forwarding & Customs",
              desc: "Expert freight forwarding and customs services to simplify global trade, including customs clearance and import–export documentation.",
            },
            {
              icon: "/icons/about/packaging.svg",
              title: "Packaging & Handling",
              desc: "Professional packaging and handling services for standard, fragile, hazardous, and oversized goods.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />

              <h3 className="text-2xl font-bold text-[#012C61] leading-tight">
                {item.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
