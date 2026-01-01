export default function AboutHero() {
  return (
    <section
      className="w-full h-[520px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/about/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1308px] px-8 flex flex-col items-center text-center gap-8">
        {/* JUDUL: About Us */}
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
          About Us
        </h1>

        {/* DESKRIPSI */}
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-[967px]">
          We provide end-to-end logistics solutions designed to move goods efficiently,
          securely, and on time across every stage of the supply chain.
        </p>
      </div>
    </section>
  )
}