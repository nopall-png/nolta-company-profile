import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">

      {/* HERO IMAGE */}
      <Image
        src="/images/about/hero.png"
        alt="About NOLTA"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[1308px] px-8 flex flex-col items-center text-center gap-8">

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
            About Us
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-[967px]">
            We provide end-to-end logistics solutions designed to move goods efficiently,
            securely, and on time across every stage of the supply chain.
          </p>

        </div>
      </div>

    </section>
  )
}
