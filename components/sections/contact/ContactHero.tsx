import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">

      {/* HERO IMAGE */}
      <Image
        src="/images/contact/hero.png"
        alt="Contact Us Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OPTIONAL OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>
      </div>

    </section>
  )
}
