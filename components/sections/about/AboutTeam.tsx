import Image from "next/image"

const team = [
  { name: "John Anderson", role: "Chief Executive Officer" },
  { name: "Sarah Mitchell", role: "Head of Operations" },
  { name: "David Kim", role: "Logistics Manager" },
]

export default function AboutTeam() {
  return (
    <section className="w-full py-24 bg-[#F9FAFB]">
      <div className="max-w-[1200px] mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#012C61]">Our Team</h2>
          <div className="w-40 h-1.5 bg-[#DF1026] rounded-xl mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center gap-4"
            >
              <Image
                src="/images/team/placeholder.jpg"
                alt={item.name}
                width={160}
                height={200}
                className="rounded-xl object-cover"
              />
              <h4 className="font-bold text-[#012C61]">{item.name}</h4>
              <p className="text-sm text-black/70">{item.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
