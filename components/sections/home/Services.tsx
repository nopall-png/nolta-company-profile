import Image from "next/image"

export default function ServicesSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="px-8 pt-8 pb-10 bg-white rounded-[10px] shadow-sm border border-gray-200 flex flex-col items-start gap-5">
            <Image
              src="/icons/home/services/start.svg"
              alt="How to get started"
              width={48}
              height={48}
            />

            <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8 font-['Poppins']">
              How to get started
            </h3>

            <p className="text-black text-base leading-6 font-['Poppins']">
              Create an account to book shipments, manage logistics operations,
              and make payments online.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="px-8 pt-8 pb-10 bg-white rounded-[10px] shadow-sm border border-gray-200 flex flex-col items-start gap-5">
            <Image
              src="/icons/home/services/booking.svg"
              alt="Ready to book"
              width={48}
              height={48}
            />

            <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8 font-['Poppins']">
              Ready to book?
            </h3>

            <p className="text-black text-base leading-6 font-['Poppins']">
              Gain access to reliable logistics services, practical insights,
              and professional support to help your business.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="px-8 pt-8 pb-10 bg-white rounded-[10px] shadow-sm border border-gray-200 flex flex-col items-start gap-5">
            <Image
              src="/icons/home/services/expert.svg"
              alt="Become a logistics expert"
              width={48}
              height={48}
            />

            <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8 font-['Poppins']">
              Become a logistics expert
            </h3>

            <p className="text-black text-base leading-6 font-['Poppins']">
              Whether you need to request shipping rates, place a booking,
              prepare documents, or track your cargo.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
