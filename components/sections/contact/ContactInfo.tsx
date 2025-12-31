import Image from "next/image"

export default function ContactInfo() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1214px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PHONE */}
          <div className="h-64 px-8 pt-8 bg-white rounded-[10px] shadow-sm border border-gray-200 flex flex-col items-center gap-4">
            <Image
              src="/icons/contact/phone.svg"
              alt="Phone"
              width={48}
              height={48}
            />

            <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8 font-['Poppins']">
              Phone
            </h3>

            <div className="flex flex-col gap-2">
              <p className="text-black text-base leading-6 font-['Poppins']">
                +1 (555) 019-4827
              </p>
              <p className="text-black text-base leading-6 font-['Poppins']">
                +44 20 7946 0958
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="h-64 px-8 pt-8 bg-white rounded-[10px] shadow-sm border border-gray-200 flex flex-col items-center gap-4">
            <Image
              src="/icons/contact/email.svg"
              alt="Email"
              width={48}
              height={48}
            />

            <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8 font-['Poppins']">
              Email
            </h3>

            <div className="flex flex-col gap-2">
              <p className="text-black text-base leading-6 font-['Poppins']">
                contact@yourcompany.com
              </p>
              <p className="text-black text-base leading-6 font-['Poppins']">
                support@yourcompany.com
              </p>
            </div>
          </div>

          {/* HEAD OFFICE */}
          <div className="h-64 px-8 pt-8 bg-white rounded-[10px] shadow-sm border border-gray-200 flex flex-col items-center gap-4">
            <Image
              src="/icons/contact/location.svg"
              alt="Head Office"
              width={48}
              height={48}
            />

            <h3 className="text-[var(--color-primary)] text-2xl font-bold leading-8 font-['Poppins']">
              Head Office
            </h3>

            <div className="flex flex-col gap-2 text-center">
              <p className="text-black text-base leading-6 font-['Poppins']">
                742 Evergreen Business Park
              </p>
              <p className="text-black text-base leading-6 font-['Poppins']">
                San Francisco, CA 94107
              </p>
              <p className="text-black text-base leading-6 font-['Poppins']">
                United States
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
