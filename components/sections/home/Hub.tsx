import Image from "next/image"

export default function StoriesHubCTA() {
  return (
    <section className="w-full h-[420px] flex">

      {/* LEFT CONTENT */}
      <div className="w-1/2 bg-[#001a3d] flex items-center">
        <div className="pl-24 max-w-[460px] flex flex-col gap-5">

          <h2 className="text-white text-2xl font-bold">
            NOLTA Stories Hub
          </h2>

          <p className="text-white text-base leading-relaxed">
            From seamless logistics solutions to smart supply chain innovations,
            discover how NOLTA is enabling efficient, reliable, and sustainable
            cargo movement across global networks.
          </p>

          <button className="w-fit px-6 py-2.5 bg-[var(--color-secondary)] rounded-full text-white text-sm font-semibold">
            Explore More
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/images/home/stories.png"
          alt="NOLTA Hub"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  )
}
