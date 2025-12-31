export default function AboutDetailSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-[776px] mx-auto px-4">

        <div className="flex flex-col items-center gap-5">

          {/* TITLE + UNDERLINE */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[var(--color-primary)] text-2xl font-bold text-center">
              Logistics services and solutions
            </h2>

            {/* RED UNDERLINE */}
            <div className="w-52 h-1.5 bg-[var(--color-secondary)] rounded-xl" />
          </div>

          {/* DESCRIPTION */}
          <p className="text-center text-[var(--color-primary)] text-xl font-normal leading-relaxed">
            Regardless of your industry, your commodity, or your key markets,
            Maersk offers global and local logistics solutions that enable small
            and large businesses to grow.
          </p>

        </div>
      </div>
    </section>
  )
}
