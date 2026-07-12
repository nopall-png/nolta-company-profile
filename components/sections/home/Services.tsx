"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { useRef, useState } from "react"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const cards = [
  {
    icon: "/icons/home/services/start.svg",
    title: "How to get started",
    desc:
      "Get started by reaching out to our team at noltalog001@noltalogistic.com to initiate your logistics requests and set up your account.",
  },
  {
    icon: "/icons/home/services/booking.svg",
    title: "Ready to book?",
    desc:
      "Easily submit your cargo details, choose your destinations, and leverage our end-to-end support to coordinate and secure your shipments.",
  },
  {
    icon: "/icons/home/services/expert.svg",
    title: "Become a logistics expert",
    desc:
      "Whether you need to request shipping rates, place a booking, prepare documents and ready to go.",
  },
]

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = 280 + 24 // width + gap
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    })
    setActiveIndex(index)
  }

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center gap-4 mb-16 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-[40px] font-bold text-center leading-tight text-[#001524]"
          >
            How to Use Our Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="h-1 bg-[#DF1026] rounded-full"
          />
        </div>

        {/* ================= CARDS ================= */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            flex gap-6 overflow-x-auto pb-6 scroll-smooth
            md:grid md:grid-cols-3 md:gap-8
            md:overflow-visible
          "
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
                min-w-[280px]
                md:min-w-0
                px-8 pt-8 pb-10
                bg-white rounded-[10px]
                shadow-sm border border-gray-200
                flex flex-col items-start gap-5
              "
            >
              <Image src={card.icon} alt={card.title} width={48} height={48} />

              <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8">
                {card.title}
              </h3>

              <p className="text-black text-base leading-6">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= SLIDE INDICATOR (MOBILE ONLY) ================= */}
        <div className="flex justify-center gap-3 mt-6 md:hidden">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${activeIndex === i ? "w-8 bg-[#DF1026]" : "w-4 bg-gray-300"}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
