import Stack from "@/components/Stack";
import Image from "next/image";

const values = [
  {
    title: "Clean code",
    desc: "I write code that's easy to read, easy to change, and easy to delete when the time comes.",
  },
  {
    title: "Ship fast",
    desc: "I believe in getting things in front of real users early and iterating based on feedback.",
  },
  {
    title: "Details matter",
    desc: "The difference between good and great is usually in the small things — spacing, transitions, error states.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] px-6 sm:px-10 md:px-16 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        

        <div className="grid grid-cols-1 gap-16 items-start">
          {/* Left — bio */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
              A little bit
              <br />
              about me.
            </h2>

            <div className="flex flex-col gap-4 text-sm text-[#666] leading-relaxed">
              <p>
                I&apos;m <span className="text-[#aaa]">Kelvin</span>, a software
                engineer based in Lagos, Nigeria. I build web applications that
                are fast, accessible, and built to last — with a focus on the
                full stack from database to UI.
              </p>
              <p>
                I got into software because I love turning ideas into things
                people can actually use. There&apos;s nothing quite like
                shipping something and watching real people interact with it.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably reading about
                systems design, experimenting with new tools, or looking for the
                best jollof rice in Lagos.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/[0.06]">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#C0460A] flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-white mb-0.5">
                      {v.title}
                    </p>
                    <p className="text-sm text-[#555] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Location", value: "Lagos, Nigeria" },
              { label: "Available", value: "For hire ✓" },
              { label: "Experience", value: "2+ years" },
              { label: "Focus", value: "Full stack" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="bg-[#161616] border border-white/[0.06] rounded-lg px-4 py-3"
              >
                <p className="text-[11px] text-[#444] mb-1">{fact.label}</p>
                <p className="text-sm font-medium text-[#aaa]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Stack />
    </section>
  );
}
