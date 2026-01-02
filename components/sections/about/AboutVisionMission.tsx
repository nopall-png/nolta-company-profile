export default function AboutVisionMission() {
  return (
    <section className="w-full py-24 bg-[#ffffff]">
      {/* === BAGIAN 2: MISSION & VISION === */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
        
        {/* --- MISSION BLOCK --- */}
        <div className="flex-1 flex gap-6">
          <div className="w-1.5 bg-[#DF1026] rounded-full shrink-0"></div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="/icons/about/mission.svg" alt="Mission Icon" width={40} height={40} />
              <h3 className="text-3xl font-bold text-[#012C61]">Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide dependable logistics solutions that support business growth and operational excellence.
            </p>
          </div>
        </div>

        {/* --- VISION BLOCK --- */}
        <div className="flex-1 flex gap-6">
          <div className="w-1.5 bg-[#DF1026] rounded-full shrink-0"></div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="/icons/about/vision.svg" alt="Vision Icon" width={40} height={40} />
              <h3 className="text-3xl font-bold text-[#012C61]">Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become a trusted logistics partner recognized for reliability, efficiency, and innovation.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
