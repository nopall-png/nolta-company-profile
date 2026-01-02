export default function GetInTouch() {
  return (
    <section className="w-full bg-whitepy-24">
      <div className="max-w-[896px] mx-auto px-6 flex flex-col gap-12">

        {/* TITLE */}
        <h2 className="text-center text-sky-950 text-4xl font-bold font-['Poppins'] leading-10">
          Get In Touch With Us
        </h2>

        {/* FORM CARD */}
        <div className="bg-white rounded-[10px] shadow-sm outline outline-1 outline-gray-200 p-12">
          <form className="flex flex-col gap-8">

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-normal font-['Poppins'] leading-6">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-normal font-['Poppins'] leading-6">
                  Company Name
                </label>
                <input
                  type="text"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-normal font-['Poppins'] leading-6">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sky-950 text-base font-normal font-['Poppins'] leading-6">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col gap-2">
              <label className="text-sky-950 text-base font-normal font-['Poppins'] leading-6">
                Subject
              </label>
              <input
                type="text"
                className="h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-1 focus:ring-sky-950"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-sky-950 text-base font-normal font-['Poppins'] leading-6">
                Message *
              </label>
              <textarea
                rows={6}
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-950 resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-[208px] h-14 bg-sky-950 rounded-lg text-white text-base font-normal font-['Poppins'] leading-6 hover:bg-sky-900 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}
