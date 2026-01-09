"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"

/* ===============================
   ANIMATION VARIANTS
================================ */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
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

export default function ContactInfo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  /* ===============================
     UPDATE ACTIVE DOT ON SCROLL
  ================================= */
  const handleScroll = () => {
    if (!containerRef.current) return
    const scrollLeft = containerRef.current.scrollLeft
    const width = containerRef.current.clientWidth
    setActiveIndex(Math.round(scrollLeft / width))
  }

  /* ===============================
     CLICK DOT → MOVE SLIDE
  ================================= */
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return
    const width = containerRef.current.clientWidth

    containerRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    })

    setActiveIndex(index)
  }

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1214px] mx-auto px-6">

        {/* ================= CARD CONTAINER ================= */}
        <motion.div
          ref={containerRef}
          onScroll={handleScroll}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            flex gap-6 overflow-x-auto pb-6
            snap-x snap-mandatory
            md:grid md:grid-cols-3 md:gap-8
            md:overflow-visible
          "
        >

          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.15)" }}
            className="
              min-w-full snap-start
              md:min-w-0
              h-64 px-8 pt-8
              bg-white rounded-[10px]
              shadow-sm border border-gray-200
              flex flex-col items-center gap-4
            "
          >
            <Image src="/icons/contact/phone.svg" alt="Phone" width={48} height={48} />
            <h3 className="text-[var(--color-primary)] text-2xl font-bold">Phone</h3>
            <p>+1 (555) 019-4827</p>
            <p>+44 20 7946 0958</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.15)" }}
            className="
              min-w-full snap-start
              md:min-w-0
              h-64 px-8 pt-8
              bg-white rounded-[10px]
              shadow-sm border border-gray-200
              flex flex-col items-center gap-4
            "
          >
            <Image src="/icons/contact/email.svg" alt="Email" width={48} height={48} />
            <h3 className="text-[var(--color-primary)] text-2xl font-bold">Email</h3>
            <p>contact@yourcompany.com</p>
            <p>support@yourcompany.com</p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.15)" }}
            className="
              min-w-full snap-start
              md:min-w-0
              h-64 px-8 pt-8
              bg-white rounded-[10px]
              shadow-sm border border-gray-200
              flex flex-col items-center gap-4
            "
          >
            <Image src="/icons/contact/location.svg" alt="Location" width={48} height={48} />
            <h3 className="text-[var(--color-primary)] text-2xl font-bold">Head Office</h3>
            <p>742 Evergreen Business Park</p>
            <p>San Francisco, CA 94107</p>
            <p>United States</p>
          </motion.div>

        </motion.div>

        {/* ================= DOT INDICATOR (CLICKABLE) ================= */}
        <div className="flex justify-center gap-3 mt-4 md:hidden">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`
                h-2 rounded-full transition-all duration-300
                ${activeIndex === i ? "w-6 bg-[#DF1026]" : "w-2 bg-gray-300"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
