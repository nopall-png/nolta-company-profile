export default function AboutInfoTwo() {
  return (
    <section className="w-full py-24 bg-[#ffffff]">
      {/* Container Utama */}
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col items-center gap-12">

        {/* === HEADER === */}
        <h2 className="text-[32px] font-bold text-[#012C61]">
          Why Choose Us
        </h2>

        {/* === CARD KOTAK PUTIH === */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-10 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            
            {/* Kolom Kiri */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                {/* Ikon Centang Merah (Inline SVG) */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DF1026"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-lg font-medium text-[#1F2937]">Reliable and on-time delivery</span>
              </div>
              
              <div className="flex items-center gap-4">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DF1026"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-lg font-medium text-[#1F2937]">Experienced logistics professionals</span>
              </div>

              <div className="flex items-center gap-4">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DF1026"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-lg font-medium text-[#1F2937]">Commitment to safety and compliance</span>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DF1026"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-lg font-medium text-[#1F2937]">Transparent shipment tracking</span>
              </div>

              <div className="flex items-center gap-4">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#DF1026"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-lg font-medium text-[#1F2937]">Scalable solutions</span>
              </div>
            </div>

          </div>
        </div>

        {/* === FOOTER TEXT === */}
        <p className="text-xl md:text-2xl text-[#012C61] text-center font-medium leading-relaxed max-w-4xl">
          Logistics is more than moving goods — it is about building trust, maintaining continuity, and supporting long-term partnerships.
        </p>

      </div>
    </section>
  )
}