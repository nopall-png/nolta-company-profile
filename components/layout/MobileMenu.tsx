"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-primary z-50"
        >
          <ul className="flex flex-col gap-6 px-6 py-8 text-white font-poppins text-lg">
            <li>
              <Link href="/" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={onClose}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={onClose}>
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
