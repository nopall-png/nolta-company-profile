import React from 'react';

export default function AboutTeam() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* === BAGIAN KIRI: GAMBAR (DICROP) === */}
        {/*
           PERBAIKAN UTAMA DI SINI:
           1.  Kita tentukan tinggi fix untuk wadahnya.
               - h-[300px] untuk mobile/tablet.
               - lg:h-[480px] untuk desktop agar seimbang dengan teks di kanan.
           2.  overflow-hidden: Memastikan bagian gambar yang keluar dari wadah disembunyikan.
        */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[480px] relative overflow-hidden rounded-lg shadow-sm">
          <img
            src="/images/about/ourteam.png"
            alt="Our Team meeting in office"
            // w-full h-full: Memaksa gambar mengisi penuh wadahnya.
            // object-cover: INI KUNCINYA. Ini akan memotong (crop) gambar agar pas di wadah tanpa mengubah proporsi (tidak gepeng).
            className="w-full h-full object-cover"
          />
        </div>

        {/* === BAGIAN KANAN: TEKS === */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-[32px] font-bold text-[#012C61]">
            Our Team
          </h2>

          <p className="text-lg text-black leading-relaxed">
            Behind every successful delivery is a team that cares. Our people bring
            expertise, integrity, and accountability to every shipment, working together
            to build long-term partnerships and deliver consistent results for our clients.
          </p>
        </div>

      </div>
    </section>
  )
}