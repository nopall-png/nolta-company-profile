import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#00243D] to-[#001829] text-white pt-20 pb-8 border-t border-cyan-500/20 overflow-hidden">
      
      {/* Background Pattern - Subtle waves */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 40, 50 50 T 100 50' stroke='%2300D9FF' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 100px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* === BAGIAN ATAS === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* KOLOM 1: Services & Logo */}
          <div className="flex flex-col items-start h-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-white tracking-wide">Services</h3>
            </div>
            <ul className="flex flex-col gap-3 text-base font-light text-gray-300">
              {['Ocean Freight', 'Intermodal Transport', 'Door-to-Door Delivery', 'Cargo Tracking', 'Supply Chain Solutions'].map((service, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer group">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></span>
                  {service}
                </li>
              ))}
            </ul>

            {/* === LOGO NOLTA === */}
            <div className="mt-12 flex items-center gap-4">
              <div className="relative w-28 h-14 overflow-hidden"> 
                <Image
                  src="/images/navbar/logo.png"
                  alt="Nolta Logo"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <span className="text-[42px] font-bold tracking-wider text-white drop-shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                NOLTA
              </span>
            </div>
          </div>

          {/* KOLOM 2: Company (Tengah) */}
          <div className="flex flex-col items-start lg:items-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full lg:hidden"></div>
              <h3 className="text-xl font-semibold text-white tracking-wide">Company</h3>
            </div>
            <ul className="flex flex-col gap-3 text-base font-light text-gray-300 text-left lg:text-center">
              {['About NOLTA', 'Our Services', 'Careers', 'News & Insights', 'Contact Us'].map((item, idx) => (
                <li key={idx} className="hover:text-cyan-400 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: Resources (Kanan) */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full lg:hidden"></div>
              <h3 className="text-xl font-semibold text-white tracking-wide">Resources</h3>
            </div>
            <ul className="flex flex-col gap-3 text-base font-light text-gray-300 text-left lg:text-right">
              {['Track Shipment', 'Get Quote', 'Documentation', 'Support Center', 'Terms of Service'].map((item, idx) => (
                <li key={idx} className="hover:text-cyan-400 transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* === GARIS PEMISAH dengan Gradient === */}
        <div className="relative w-full h-px mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>

        {/* === BAGIAN BAWAH === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-sm text-gray-300">
          
          {/* Contact Info dengan Icon Style */}
          <div className="flex flex-col gap-3 text-left">
            <h4 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              Contact
            </h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">✉</span>
                <span>info@nolta-logistics.com</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">☎</span>
                <span>+62 xxx xxxx xxxx</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">📍</span>
                <span>Jakarta, Indonesia</span>
              </p>
            </div>
          </div>

          {/* Follow Us dengan Social Media Buttons */}
          <div className="flex flex-col md:items-center gap-4">
            <h4 className="text-base font-semibold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full md:hidden"></span>
              Follow Us
            </h4>
            <div className="flex gap-3">
              {['LinkedIn', 'Instagram', 'Facebook'].map((social, idx) => (
                <button 
                  key={idx}
                  className="px-4 py-2 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 rounded-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:items-end gap-2 text-xs text-gray-400">
            <p>© 2024 NOLTA Logistics</p>
            <p>All Rights Reserved</p>
          </div>

        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 font-light tracking-wide">
            Navigating Global Trade with <span className="text-cyan-400 font-medium">Precision</span> and <span className="text-cyan-400 font-medium">Excellence</span>
          </p>
        </div>

      </div>
    </footer>
  )
}