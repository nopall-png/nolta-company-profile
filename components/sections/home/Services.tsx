import Image from "next/image"

export default function ServicesSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-[1308px] mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* CARD 1 */}
          <div className="w-[380px] h-[230px] px-8 py-10 rounded-[5px] border border-neutral-500/50 flex flex-col gap-5">
            <Image
              src="/icons/home/services/start.svg"
              alt="How to get started"
              width={44}
              height={44}
            />

            <h3 className="text-sky-950 text-base font-bold">
              How to get started
            </h3>

            <p className="text-black text-xs leading-relaxed">
              Create an account to book shipments, manage logistics operations,
              and make payments online.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-[380px] h-[230px] px-8 py-10 rounded-[5px] border border-neutral-500/50 flex flex-col gap-5">
            <Image
              src="/icons/home/services/booking.svg"
              alt="Ready to book"
              width={44}
              height={44}
            />

            <h3 className="text-sky-950 text-base font-bold">
              Ready to book?
            </h3>

            <p className="text-black text-xs leading-relaxed">
              Gain access to reliable logistics services, practical insights,
              and professional support to help your business.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-[380px] h-[230px] px-8 py-10 rounded-[5px] border border-neutral-500/50 flex flex-col gap-5">
            <Image
              src="/icons/home/services/expert.svg"
              alt="Become a logistics expert"
              width={44}
              height={44}
            />

            <h3 className="text-sky-950 text-base font-bold">
              Become a logistics expert
            </h3>

            <p className="text-black text-xs leading-relaxed">
              Whether you need to request shipping rates, place a booking,
              prepare documents, or track your cargo.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
