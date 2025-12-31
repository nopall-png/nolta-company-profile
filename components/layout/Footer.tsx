import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#012c61] text-white">
      <div className="max-w-container mx-auto px-4 py-16">

        {/* TOP SECTION */}
        <div className="flex flex-col gap-16">

          {/* LINKS SECTION */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">

            {/* SERVICES */}
            <div className="text-2xl font-normal leading-relaxed">
              <p className="mb-4">Services</p>
              <ul className="space-y-2 text-base">
                <li>Ocean Freight</li>
                <li>Intermodal Transport</li>
                <li>Door-to-Door Delivery</li>
                <li>Cargo Tracking</li>
                <li>Supply Chain Solutions</li>
              </ul>
            </div>

            {/* COMPANY (CENTER) */}
            <div className="text-2xl font-normal text-left lg:text-center leading-relaxed">
              <p className="mb-4">Company</p>
              <ul className="space-y-2 text-base">
                <li>About NOLTA</li>
                <li>Our Services</li>
                <li>Careers</li>
                <li>News & Insights</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* COMPANY (RIGHT) */}
            <div className="text-2xl font-normal text-left lg:text-right leading-relaxed">
              <p className="mb-4">Company</p>
              <ul className="space-y-2 text-base">
                <li>About NOLTA</li>
                <li>Our Services</li>
                <li>Careers</li>
                <li>News & Insights</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-6">
            <Image
              src="/images/navbar/logo.png"
              alt="Nolta Logo"
              width={201}
              height={275}
              className="object-contain"
            />
            <div className="text-4xl font-bold">
              NOLTA
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/40" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-base">

          {/* CONTACT */}
          <div className="leading-relaxed">
            <p className="mb-2 font-medium">Contact</p>
            <p>Email: info@nolta-logistics.com</p>
            <p>Phone: +62 xxx xxxx xxxx</p>
            <p>Address: Jakarta, Indonesia</p>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <span>Follow Us</span>
            <span>LinkedIn · Instagram · Facebook</span>
          </div>

        </div>
      </div>
    </footer>
  )
}
