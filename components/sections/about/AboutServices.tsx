import React from 'react';

export default function AboutServices() {
  return (
    <section className="w-full py-24 bg-white">
      {/* Container Utama untuk 'What We Do' */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-12">
        
        {/* === BAGIAN 1: WHAT WE DO === */}
        <h2 className="text-[32px] font-bold text-[#012C61]">
          What We Do
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Kartu 1: Freight */}
          <div className="w-[367px] h-[288px] bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <img src="/icons/about/transport.svg" alt="Transport Icon" width={48} height={48} className="w-12 h-12"/>
            </div>
            <h3 className="text-2xl font-bold text-[#012C61] w-[187px] mb-4 leading-tight">
              Freight & Transportation
            </h3>
            <p className="text-base text-gray-600 w-[294px] leading-relaxed">
              Efficient land, sea, and air freight solutions optimized for reliability and cost efficiency.
            </p>
          </div>

          {/* Kartu 2: Warehousing */}
          <div className="w-[367px] h-[288px] bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <img src="/icons/about/warehouse.svg" alt="Warehouse Icon" width={48} height={48} className="w-12 h-12"/>
            </div>
            <h3 className="text-2xl font-bold text-[#012C61] w-[192px] mb-4 leading-tight">
              Warehousing & Distribution
            </h3>
            <p className="text-base text-gray-600 w-[252px] leading-relaxed">
              Secure storage, inventory management, and streamlined distribution operations.
            </p>
          </div>

          {/* Kartu 3: Supply Chain */}
          <div className="w-[367px] h-[288px] bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <img src="/icons/about/supply.svg" alt="Supply Icon" width={48} height={48} className="w-12 h-12"/>
            </div>
            <h3 className="text-2xl font-bold text-[#012C61] w-[165px] mb-4 leading-tight">
              Supply Chain Optimization
            </h3>
            <p className="text-base text-gray-600 w-[294px] leading-relaxed">
              Strategic planning and tracking to improve visibility, reduce delays, and increase performance.
            </p>
          </div>
        </div>

        {/* === SPACER === */}
        {/* Memberi jarak antara kotak 'What We Do' dengan bagian Mission/Vision */}
        <div className="w-full h-16"></div>

        {/* === BAGIAN 2: MISSION & VISION === */}
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
          
          {/* --- MISSION BLOCK --- */}
          <div className="flex-1 flex gap-6">
            {/* Garis Merah Vertikal */}
            <div className="w-1.5 bg-[#DF1026] rounded-full shrink-0"></div>
            
            <div className="flex flex-col gap-4">
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-4">
                <img src="/icons/about/mission.svg" alt="Mission Icon" width={40} height={40} />
                <h3 className="text-3xl font-bold text-[#012C61]">Mission</h3>
              </div>
              {/* Text */}
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide dependable logistics solutions that support business growth and operational excellence.
              </p>
            </div>
          </div>

          {/* --- VISION BLOCK --- */}
          <div className="flex-1 flex gap-6">
            {/* Garis Merah Vertikal */}
            <div className="w-1.5 bg-[#DF1026] rounded-full shrink-0"></div>
            
            <div className="flex flex-col gap-4">
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-4">
                <img src="/icons/about/vision.svg" alt="Vision Icon" width={40} height={40} />
                <h3 className="text-3xl font-bold text-[#012C61]">Vision</h3>
              </div>
              {/* Text */}
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a trusted logistics partner recognized for reliability, efficiency, and innovation.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}