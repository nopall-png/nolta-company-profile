import React from 'react';

export default function AboutInfoOne() {
  return (
    <section className="w-full py-24 bg-white">
      {/* Perubahan Kunci: 'items-center'
        Ini membuat Teks (kiri) berada di tengah-tengah vertikal (center) 
        relatif terhadap Gambar (kanan). Jadi ada sisa ruang di atas dan bawah teks.
      */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-row items-center justify-center gap-16">
        
        {/* === BAGIAN KIRI: TEKS === */}
        <div className="w-[527px] flex flex-col gap-6 shrink-0">
          <h2 className="text-[32px] font-bold text-[#012C61] leading-tight">
            Who We Are
          </h2>
          
          <p className="text-lg text-black leading-relaxed">
            We are a logistics company focused on delivering end-to-end supply chain solutions. 
            Our expertise spans transportation, warehousing, and distribution, enabling businesses 
            to operate efficiently across local and global markets.
          </p>
        </div>

        {/* === BAGIAN KANAN: GAMBAR === */}
        <div className="w-[559px] h-[330px] shrink-0">
          <img 
            src="/images/about/whoweare.png" 
            alt="Logistics container and crane"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

      </div>
    </section>
  )
}