"use client"

import { motion } from "framer-motion"

export default function AboutIntroSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center">

        <div className="max-w-[900px] flex flex-col items-center gap-10">

          {/* TITLE SECTION */}
          <div className="flex flex-col items-center gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-[40px] font-bold text-center leading-tight text-[#001524]"
            >
              Be ready for anything to go all the way
            </motion.h2>

            {/* ANIMATED RED UNDERLINE */}
            {/* Garis ini akan memanjang saat terlihat di layar */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 160 }} // Lebar final (40 tailwind = 160px)
              transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
              viewport={{ once: true }}
              className="h-[5px] bg-red-600 rounded-full" 
            />
          </div>

          {/* DESCRIPTION SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-lg md:text-xl leading-relaxed text-[#001524]/80 font-['Poppins']">
              Logistics can get messy fast. And just when you think you’re done,
              another challenge appears. With <span className="font-semibold text-[#001524]">Nolta</span> as your partner, you don't
              have to face challenges alone. We bring clarity where complexity
              builds. Whether it’s one service or a complete solution, you{" "}
              
              {/* Highlight Text Effect */}
              <span className="relative inline-block group cursor-pointer text-[#001524] font-semibold">
                stay ready for what comes next
                {/* Garis bawah tipis yang menebal saat hover */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 origin-left scale-x-100 transition-transform duration-300 group-hover:h-[4px]"></span>
              </span>
              .
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}