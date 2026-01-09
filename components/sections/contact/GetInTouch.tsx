"use client"

import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function GetInTouch() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[896px] mx-auto px-6 flex flex-col gap-12">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-sky-950 text-4xl font-bold font-['Poppins'] leading-10"
        >
          Get In Touch With Us
        </motion.h2>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-[10px] shadow-sm outline outline-1 outline-gray-200 p-12"
        >
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={item} className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-['Poppins']">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-['Poppins']">
                  Company Name
                </label>
                <input
                  type="text"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </motion.div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={item} className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-['Poppins']">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-['Poppins']">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </motion.div>
            </div>

            {/* SUBJECT */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <label className="text-sky-950 text-base font-['Poppins']">
                Subject
              </label>
              <input
                type="text"
                className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
              />
            </motion.div>

            {/* MESSAGE */}
            <motion.div variants={item} className="flex flex-col gap-2">
              <label className="text-sky-950 text-base font-['Poppins']">
                Message *
              </label>
              <textarea
                rows={6}
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-950 resize-none"
              />
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={item}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-[208px] h-14 bg-sky-950 rounded-lg text-white text-base font-['Poppins'] hover:bg-sky-900 transition"
            >
              Send Message
            </motion.button>

          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
