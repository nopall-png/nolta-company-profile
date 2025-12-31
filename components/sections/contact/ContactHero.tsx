import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="w-full h-[420px] relative flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/contact/hero.png"
        alt="Contact Us Hero"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY (optional biar text kebaca) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CENTER TEXT */}
      <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold">
        Contact Us
      </h1>

    </section>
  )
}
