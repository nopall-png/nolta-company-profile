export default function AboutIntroSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-[1308px] mx-auto px-8 flex justify-center">

        <div className="w-[939px] flex flex-col items-center gap-7">

          {/* TITLE */}
          <div className="w-[472px] flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-bold text-center"
              style={{ color: "var(--color-primary)" }}
            >
              Be ready for anything to go all the way
            </h2>

            {/* RED UNDERLINE */}
            <div className="w-52 h-1.5 bg-red-600 rounded-xl" />
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-center text-xl font-normal leading-relaxed"
            style={{ color: "var(--color-primary)" }}
          >
            Logistics can get messy fast. And just when you think you’re done,
            another challenge appears. With Maersk as your partner, you don’t
            have to face challenges alone. We bring clarity where complexity
            builds. Whether it’s one service or a complete solution, you{" "}
            <span className="underline">
              stay ready for what comes next
            </span>
            .
          </p>

        </div>
      </div>
    </section>
  )
}
