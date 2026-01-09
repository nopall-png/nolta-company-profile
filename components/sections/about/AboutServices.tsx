"use client"

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

        {/* === CARDS === */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

          {[
            {
              icon: "/icons/about/transport.svg",
              title: "Freight & Transportation",
              desc: "Efficient land, sea, and air freight solutions optimized for reliability and cost efficiency.",
              wTitle: "w-[187px]",
              wDesc: "w-[294px]",
            },
            {
              icon: "/icons/about/warehouse.svg",
              title: "Warehousing & Distribution",
              desc: "Secure storage, inventory management, and streamlined distribution operations.",
              wTitle: "w-[192px]",
              wDesc: "w-[252px]",
            },
            {
              icon: "/icons/about/supply.svg",
              title: "Supply Chain Optimization",
              desc: "Strategic planning and tracking to improve visibility, reduce delays, and increase performance.",
              wTitle: "w-[165px]",
              wDesc: "w-[294px]",
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
              className="w-[367px] h-[288px] bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>

              <h3
                className={`text-2xl font-bold text-[#012C61] ${item.wTitle} mb-4 leading-tight`}
              >
                {item.title}
              </h3>

              <p
                className={`text-base text-gray-600 ${item.wDesc} leading-relaxed`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* === SPACER === */}
        <div className="w-full h-16" />
      </div>
    </section>
  )
}
