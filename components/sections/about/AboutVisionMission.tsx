export default function AboutVisionMission() {
  return (
    <section className="w-full py-24 bg-[#012C61]">
      <div className="max-w-[1100px] mx-auto px-8 grid md:grid-cols-2 gap-16 text-white">

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <div className="w-20 h-1.5 bg-[#DF1026] rounded-xl" />
          <p className="text-base leading-relaxed">
            To become a trusted logistics partner enabling seamless global trade
            through innovation, reliability, and sustainability.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <div className="w-20 h-1.5 bg-[#DF1026] rounded-xl" />
          <p className="text-base leading-relaxed">
            Deliver efficient logistics solutions, empower businesses with
            transparency, and build long-term partnerships worldwide.
          </p>
        </div>

      </div>
    </section>
  )
}
