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
              icon: "/icons/about/freight.svg",
              title: "Freight Forwarding Services",
              points: [
                "Export & import freight forwarding",
                "Shipping documentation",
                "Cargo consolidation",
                "Cargo insurance arrangement",
              ],
            },
            {
              icon: "/icons/about/transport.svg",
              title: "Land Transportation",
              points: [
                "Trucking services (FTL & LTL)",
                "Door-to-door delivery",
                "Domestic distribution",
                "Project cargo & heavy equipment transportation",
              ],
            },
            {
              icon: "/icons/home/services/port.svg",
              title: "Sea Freight",
              points: [
                "Full Container Load (FCL)",
                "Less than Container Load (LCL)",
                "Break bulk & bulk cargo",
                "Export & import handling",
                "Customs clearance assistance",
              ],
            },
            {
              icon: "/icons/about/air.svg",
              title: "Air Freight",
              points: [
                "Regular & express air cargo",
                "Time-sensitive shipments",
                "General and special cargo",
                "Door-to-door air freight services",
              ],
            },
            {
              icon: "/icons/about/project.svg",
              title: "Project & Special Cargo",
              points: [
                "Heavy lift and oversized cargo",
                "Project logistics",
                "Charter vessel coordination",
                "Port handling and supervision",
              ],
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
              className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-all group"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />

              <h3 className="text-2xl font-bold text-[#012C61] leading-tight transition-transform duration-300 group-hover:scale-105 origin-left">
                {item.title}
              </h3>

              <ul className="flex flex-col gap-2 w-full text-base text-gray-600 mt-2">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-[#DF1026] mt-1.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
