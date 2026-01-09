"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

type CategoryKey = "port" | "tech" | "safety" | "cyber"

const categories = [
  { key: "port", label: "Port congestion", icon: "/icons/home/services/port.svg" },
  { key: "tech", label: "Technological upkeep", icon: "/icons/home/services/tech.svg" },
  { key: "safety", label: "Safety and security", icon: "/icons/home/services/safety.svg" },
  { key: "cyber", label: "Cybersecurity", icon: "/icons/home/services/cyber.svg" },
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
  const [activeIndex, setActiveIndex] = useState(0)

  const sliderRef = useRef<HTMLDivElement>(null)

  const cards = cardsByCategory[activeTab]

  const handleScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, offsetWidth } = sliderRef.current
    const index = Math.round(scrollLeft / offsetWidth)
    setActiveIndex(index)
  }

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return
    sliderRef.current.scrollTo({
      left: index * sliderRef.current.offsetWidth,
      behavior: "smooth",
    })
  }

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-start md:justify-center gap-6 md:gap-12 mb-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key

            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveTab(cat.key as CategoryKey)
                  setActiveIndex(0)
                }}
                className="relative flex items-center gap-3 pb-2"
              >
                <Image src={cat.icon} alt={cat.label} width={32} height={32} />
                <span className={`text-base font-medium ${isActive ? "text-black" : "text-gray-500"}`}>
                  {cat.label}
                </span>

                <span
                  className={`absolute left-0 -bottom-2 h-[3px] w-full bg-[#DF1026] rounded-full transition-transform duration-300
                    ${isActive ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </button>
            )
          })}
        </div>

        {/* ================= CARDS ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* MOBILE SLIDER */}
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="
                flex gap-6 overflow-x-auto pb-6
                snap-x snap-mandatory
                md:grid md:grid-cols-3 md:gap-12
                md:overflow-visible
              "
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="
                    min-w-full snap-start
                    md:min-w-0
                    flex flex-col gap-4
                  "
                >
                  {/* IMAGE */}
                  {card.img ? (
                    <div className="w-full h-[220px] relative rounded-2xl overflow-hidden shadow-sm">
                      <Image src={card.img} alt={card.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-full h-[220px] rounded-2xl bg-gray-100 flex items-center justify-center text-gray-300 text-3xl">
                      NOLTA
                    </div>
                  )}

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#DF1026]">
                      {card.title}
                    </h3>
                    <p className="text-base text-black mt-2 leading-6">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= RED DOT INDICATOR (MOBILE ONLY) ================= */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300
                    ${activeIndex === i ? "w-6 bg-[#DF1026]" : "w-2 bg-gray-300"}
                  `}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
  