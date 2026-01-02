import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#00243D] text-white">
      <div className="max-w-[1400px] mx-auto px-10 py-24">

        {/* ===== TOP LINKS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">

          {/* SERVICES */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-base leading-relaxed opacity-90">
              <li>Ocean Freight</li>
              <li>Intermodal Transport</li>
              <li>Door-to-Door Delivery</li>
              <li>Cargo Tracking</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </div>

          {/* COMPANY (CENTER) */}
          <div className="md:text-center">
            <h4 className="text-2xl font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-base leading-relaxed opacity-90">
              <li>About NOLTA</li>
              <li>Our Services</li>
              <li>Careers</li>
              <li>News & Insights</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* COMPANY (RIGHT) */}
          <div className="md:text-right">
            <h4 className="text-2xl font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-base leading-relaxed opacity-90">
              <li>About NOLTA</li>
              <li>Our Services</li>
              <li>Careers</li>
              <li>News & Insights</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* ===== BRAND ===== */}
        <div className="mt-24 flex items-center gap-4">
          <Image
            src="/images/navbar/logo.png"
            alt="NOLTA Logo"
            width={200}
            height={100}
          />
          <span className="text-3xl font-bold tracking-wide">
            NOLTA
          </span>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="my-14 h-px bg-white/30" />

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col md:flex-row justify-between gap-12 text-base opacity-90">

          {/* CONTACT */}
          <div className="leading-relaxed">
            <p className="font-semibold mb-2">
              Contact
            </p>
            <p>Email: info@nolta-logistics.com</p>
            <p>Phone: +62 xxx xxxx xxxx</p>
            <p>Address: Jakarta, Indonesia</p>
          </div>

          {/* SOCIAL */}
          <div className="flex items-start md:items-center gap-4">
            <span className="font-semibold">
              Follow Us
            </span>
            <span>
              LinkedIn · Instagram · Facebook
            </span>
          </div>

        </div>
      </div>
    </footer>
  )
}
