import Image from "next/image"

export default function ServiceDetailSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1229px] mx-auto px-12">

        {/* CATEGORY TABS */}
        <div className="flex items-center gap-12 mb-14">
          {[
            { label: "Port congestion", icon: "/icons/home/services/port.svg", active: true },
            { label: "Technological upkeep", icon: "/icons/home/services/tech.svg" },
            { label: "Safety and security", icon: "/icons/home/services/safety.svg" },
            { label: "Cybersecurity", icon: "/icons/home/services/cyber.svg" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 relative">
              <Image src={item.icon} alt={item.label} width={32} height={32} />
              <span className="text-black text-base font-normal">
                {item.label}
              </span>

              {item.active && (
                <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-[var(--color-secondary)] rounded" />
              )}
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* CARD */}
          {[
            {
              img: "/images/home/stories/spot.png",
              title: "NOLTA Spot",
              desc: "Get fixed pricing and reliable shipment schedules when booking your cargo online.",
            },
            {
              img: "/images/home/stories/contract.png",
              title: "NOLTA Ocean Contract",
              desc: "Move your goods with stable rates, secured capacity, and flexible contract options.",
            },
            {
              img: "/images/home/stories/quote.png",
              title: "NOLTA Ocean Quote Request",
              desc: "Request freight quotes for standard, oversized, and LCL shipments easily.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="w-[318px] flex flex-col gap-3"
            >
              {/* IMAGE BOX */}
              <div className="w-full h-[221px] relative rounded-3xl overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <span className="text-[var(--color-secondary)] text-base font-medium">
                {card.title}
              </span>

              {/* DESCRIPTION */}
              <p className="text-[var(--color-primary)] text-sm min-h-[48px]">
                {card.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
