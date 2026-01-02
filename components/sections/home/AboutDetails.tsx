export default function AboutDetailSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-center">

        <div className="max-w-[900px] flex flex-col items-center gap-8">

          {/* TITLE + UNDERLINE */}
          <div className="flex flex-col items-center gap-4">
            <h2
              className="text-[32px] font-bold text-center leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Logistics services and solutions
            </h2>

            {/* RED UNDERLINE */}
            <div className="w-40 h-1 bg-[var(--color-secondary)] rounded-full" />
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-center text-lg leading-relaxed"
            style={{ color: "var(--color-primary)" }}
          >
            Regardless of your industry, your commodity, or your key markets,{" "}
            Nolta offers global and local logistics solutions that enable small
            and large businesses to grow.
          </p>

        </div>
      </div>
    </section>
  )
}
