export default function AboutIntroSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center">

        <div className="max-w-[900px] flex flex-col items-center gap-8">

          {/* TITLE */}
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-bold text-center leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Be ready for anything to go all the way
            </h2>

            {/* RED UNDERLINE */}
            <div className="w-40 h-1 bg-red-600 rounded-full" />
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-center text-lg leading-relaxed"
            style={{ color: "var(--color-primary)" }}
          >
            Logistics can get messy fast. And just when you think you’re done,
            another challenge appears. With Nolta as your partner, you don't
            have to face challenges alone. We bring clarity where complexity
            builds. Whether it’s one service or a complete solution, you{" "}
            <span className="underline font-medium">
              stay ready for what comes next
            </span>
            .
          </p>

        </div>
      </div>
    </section>
  )
}
