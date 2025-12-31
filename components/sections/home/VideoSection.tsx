import Image from "next/image"

export default function VideoSection() {
  return (
    <section className="relative w-full h-screen">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/home/video.png" 
        alt="Logistics Video Section"
        fill
        priority
        className="object-cover"
      />

      {/* OPTIONAL OVERLAY (biar lebih kontras, boleh hapus) */}
      <div className="absolute inset-0 bg-black/20" />

    </section>
  )
}
