import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px]">
      
      {/* HERO IMAGE */}
      <Image
        src="/images/home/hero.png" // ganti sesuai file kamu
        alt="Nolta Hero"
        fill
        priority
        className="object-cover"
      />

      {/* OPTIONAL OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />
    </section> 
  )
}
