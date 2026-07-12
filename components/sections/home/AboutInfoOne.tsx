"use client"

import { motion } from "framer-motion"

export default function AboutInfoOne() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div
        className="
          max-w-[1200px] mx-auto px-6
          flex flex-col-reverse md:flex-row
          items-center justify-center
          gap-12 md:gap-16
        "
      >
        {/* === LEFT: TEXT === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            w-full md:w-[527px]
            flex flex-col gap-6
          "
        >
          <h2 className="text-2xl md:text-[32px] font-bold text-[#012C61] leading-tight">
            Who We Are
          </h2>

          <p className="text-base md:text-lg text-black leading-relaxed">
            PT Nolta Surya Trans is a trusted logistics and transportation company committed to
            delivering reliable, efficient, and cost-effective supply chain solutions across Indonesia.
            With years of experience in handling domestic and international logistics, we have built
            a strong reputation for professionalism, precision, and customer satisfaction. Our
            dedicated team ensures every shipment is managed with care, accuracy, and
            timeliness.
            We understand the complexity of logistics operations. Therefore, we provide
            customized solutions tailored to meet each client’s specific needs—ensuring seamless
            operations from origin to destination
          </p>
        </motion.div>

        {/* === RIGHT: IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            w-full md:w-[559px]
            h-[220px] sm:h-[260px] md:h-[330px]
          "
        >
          <img
            src="/images/home/aboutus2.jpeg"
            alt="Logistics container and crane"
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>
      </div>
    </section>
  )
}
