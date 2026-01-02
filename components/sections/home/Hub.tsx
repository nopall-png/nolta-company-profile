import Image from "next/image"

export default function StoriesHubCTA() {
  return (
    <section className="w-full bg-[#001a3d]">
      <div className="max-w-[1200px] mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 text-white max-w-[480px]">
            <h2 className="text-2xl font-bold">
              NOLTA Stories Hub
            </h2>

            <p className="text-base leading-relaxed opacity-90">
              From seamless logistics solutions to smart supply chain innovations,
              discover how NOLTA is enabling efficient, reliable, and sustainable
              cargo movement across global networks.
            </p>

            <button className="w-fit px-7 py-3 bg-[var(--color-secondary)] rounded-full text-white text-sm font-semibold hover:opacity-90 transition">
              Explore More
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] md:h-[360px] rounded-3xl overflow-hidden">
            <Image
              src="/images/home/stories.png"
              alt="NOLTA Stories Hub"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
