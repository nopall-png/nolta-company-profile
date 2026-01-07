"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type CategoryKey =
  | "port"
  | "tech"
  | "safety"
  | "cyber"

const categories = [
  {
    key: "port",
    label: "Port congestion",
    icon: "/icons/home/services/port.svg",
  },
  {
    key: "tech",
    label: "Technological upkeep",
    icon: "/icons/home/services/tech.svg",
  },
  {
    key: "safety",
    label: "Safety and security",
    icon: "/icons/home/services/safety.svg",
  },
  {
    key: "cyber",
    label: "Cybersecurity",
    icon: "/icons/home/services/cyber.svg",
  },
]

const cardsByCategory: Record<CategoryKey, any[]> = {
  port: [
    {
      img: "/images/home/stories/spot.png",
      title: "NOLTA Spot",
      desc: "Get fixed pricing and reliable shipment schedules when booking your cargo online.",
    },
    {
      img: "/images/home/stories/contract.png",
      title: "NOLTA Ocean Contract",
      desc: "Move your goods with stable rates, secured capacity, and flexible contract options.",
    },
    {
      img: "/images/home/stories/quote.png",
      title: "NOLTA Ocean Quote Request",
      desc: "Request freight quotes for standard, oversized, and LCL shipments easily.",
    },
  ],

  tech: [
    { title: "System Maintenance", desc: "Ongoing technology monitoring and infrastructure support." },
    { title: "Automation Support", desc: "Optimizing logistics operations through smart automation." },
    { title: "Data Optimization", desc: "Improving efficiency using logistics data insights." },
  ],

  safety: [
    { title: "Cargo Protection", desc: "Ensuring safety standards across transportation routes." },
    { title: "Risk Prevention", desc: "Reducing risks through operational safety systems." },
    { title: "Compliance Control", desc: "Meeting international logistics safety regulations." },
  ],

  cyber: [
    { title: "Data Security", desc: "Protecting shipment and customer data." },
    { title: "Threat Monitoring", desc: "Continuous monitoring against cyber threats." },
    { title: "System Integrity", desc: "Maintaining secure digital logistics platforms." },
  ],
}

export default function ServiceDetailSection() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("port")

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= TABS ================= */}
        {/* PERBAIKAN DI SINI:
            1. justify-start: Di HP rata kiri (seperti yang lama).
            2. md:justify-center: Di Desktop rata tengah (yang baru).
            3. gap-6 md:gap-12: Jarak di HP lebih rapat agar muat, di Desktop renggang.
        */}
        <div className="flex flex-wrap items-center justify-start md:justify-center gap-6 md:gap-12 mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key

            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key as CategoryKey)}
                className="relative flex items-center gap-3 pb-2 group outline-none"
              >
                {/* Icon dengan efek sedikit goyang saat hover */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  <Image
                    src={cat.icon}
                    alt={cat.label}
                    width={32}
                    height={32}
                  />
                </motion.div>

                <span
                  className={`text-base font-medium transition-colors duration-300
                    ${isActive ? "text-black" : "text-gray-500 group-hover:text-black"}
                  `}
                >
                  {cat.label}
                </span>

                {/* ANIMATED UNDERLINE */}
                <span
                  className={`
                    absolute left-0 -bottom-2 h-[3px] w-full
                    bg-[var(--color-secondary)] rounded-full
                    origin-left
                    transition-all duration-300 ease-out
                    ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-50"}
                  `}
                />
              </button>
            )
          })}
        </div>

        {/* ================= CARDS CONTAINER ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {cardsByCategory[activeTab].map((card, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4 group cursor-pointer"
              >

                {/* IMAGE CONTAINER */}
                {card.img ? (
                  <div className="w-full h-[220px] relative rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                ) : (
                  <div className="w-full h-[220px] rounded-2xl bg-gray-100 relative overflow-hidden group-hover:bg-gray-200 transition-colors duration-300">
                     <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-4xl opacity-20">NOLTA</span>
                     </div>
                  </div>
                )}

                {/* TEXT CONTENT */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-secondary)] group-hover:text-red-600 transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p
                    className={`text-base leading-6 mt-2
                      ${card.img ? "text-[var(--color-black)]" : "text-[var(--color-black)]"}
                    `}
                  >
                    {card.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}