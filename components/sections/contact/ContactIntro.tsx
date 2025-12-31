export default function ContactIntro() {
  return (
    <section className="w-full py-24">
      <div className="max-w-[953px] mx-auto flex flex-col items-center gap-5">

        {/* TITLE */}
        <h2
          className="
            text-center
            text-[var(--color-primary)]
            text-5xl
            font-bold
            leading-[48px]
            font-['Poppins']
          "
        >
          Get in Touch With Our Logistics Experts
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            max-w-[768px]
            text-center
            text-black
            text-xl
            font-normal
            leading-7
            font-['Poppins']
          "
        >
          Reliable logistics solutions start with clear communication.
          Our team is ready to support your shipping and supply chain needs.
        </p>

        {/* RED LIST / UNDERLINE */}
        <div className="w-24 h-1 bg-[var(--color-secondary)]" />

      </div>
    </section>
  )
}
