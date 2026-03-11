import {
  ShieldCheck,
  HeartHandshake,
  Target,
  Lightbulb,
  Globe,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in everything we do",
    icon: ShieldCheck,
  },
  {
    title: "Patient-First",
    description: "Every decision is made with patient well-being as our top priority",
    icon: HeartHandshake,
  },
  {
    title: "Quality",
    description: "We partner only with verified, high-quality healthcare providers",
    icon: Target,
  },
  {
    title: "Innovation",
    description: "Continuously improving through technology and creative solutions",
    icon: Lightbulb,
  },
  {
    title: "Accessibility",
    description: "Making healthcare information available to everyone, everywhere",
    icon: Globe,
  },
  {
    title: "Community",
    description: "Building trust and connections within healthcare ecosystems",
    icon: Users,
  },
];

export default function OurValuesSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto  container px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[30px] font-semibold leading-tight text-[#27457a] sm:text-[38px] lg:text-[44px]">
            Our <span className="text-[#1d4fff]">Values</span>
          </h2>
          <p className="mt-3 text-sm text-[#9a9a9a] sm:text-[15px]">
            The principles that guide our mission and drive our commitment to
            excellence
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[18px] bg-white p-5 shadow-[0_3px_14px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf4f3] sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-[#1d4fff] sm:h-6 sm:w-6" strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#27457a] sm:text-[22px]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[260px] text-sm leading-6 text-[#8d8d8d] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}