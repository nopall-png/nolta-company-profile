import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">

      {/* HERO IMAGE */}
      <Image
        src="/images/home/heroo.jpg" // ganti sesuai file kamu
        alt="Nolta Hero"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover object-center"
      />

      {/* OPTIONAL OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}
