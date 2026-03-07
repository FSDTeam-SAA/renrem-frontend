import Image from "next/image";
import React from "react";

const treatmentCards = [
  {
    title: "Erectile\nDisfunction",
    badge: "New",
    image:
      "/images/health1.jpg",
  },
  {
    title: "Weight Control",
    badge: null,
    image:
      "/images/health2.jpg",
  },
];

const quickLinks = [
  { label: "Check your\ninsutance - free" },
  { label: "See how much\nyou could lose" },
  { label: "Explore all\nmedications" },
];

const steps = [
  {
    num: "1.",
    title: "Select treatment",
    desc: "Choose the treatment that's right for you.",
  },
  {
    num: "2.",
    title: "Review blood work",
    desc: "Submit your lab or order labs with us.",
  },
  {
    num: "3.",
    title: "Meet license provider",
    desc: "1 on 1 personalized care. Discuss your therapy goals.",
  },
  {
    num: "4.",
    title: "Begin treatment",
    desc: "Your medication is delivered discreetly to your door.",
  },
];

export default function HealthMove() {
  return (
    <div className="min-h-screen font-sans container mx-auto my-[58px]">
      {/* Heading */}
      <h1 className="text-[48px] font-extrabold text-blue-600 tracking-tight mb-6 leading-tight">
        YOUR HEALTH. YOUR MOVE.
      </h1>

      {/* Treatment Cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {treatmentCards.map((card) => (
          <div
            key={card.title}
            className="relative overflow-hidden h-[350px]"
          >
            {/* Background Image */}
            <Image
              width={500}
              height={500}
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/20" /> */}

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-white text-2xl font-bold leading-tight whitespace-pre-line drop-shadow">
                  {card.title}
                </h2>
                {card.badge && (
                  <span className="inline-block mt-3 bg-[#e8f56a] text-black text-xs font-semibold px-4 py-1.5 rounded-full">
                    {card.badge}
                  </span>
                )}
              </div>
              <div className="flex justify-end">
                <button className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-colors">
                  Start Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="flex gap-3 mb-4">
        {quickLinks.map((link) => (
          <div
            key={link.label}
            className="flex-1 bg-[#EEE9E4] px-5 h-[184px] flex items-center justify-between gap-4 shadow-sm"
          >
            <span className="text-sm font-medium text-neutral-800 whitespace-pre-line leading-snug">
              {link.label}
            </span>
            <button className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 hover:bg-neutral-800 transition-colors text-base">
              →
            </button>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="flex gap-3">
  {steps.map((step) => (
    <div
      key={step.num}
      className="flex-1 bg-[#E3E3E6] px-5 h-[194px] flex flex-col items-center justify-center text-center"
    >
      <p className="text-sm font-semibold text-neutral-700 mb-2">
        {step.num} {step.title}
      </p>
      <p className="text-sm text-neutral-500 leading-relaxed">
        {step.desc}
      </p>
    </div>
  ))}
</div>
    </div>
  );
}
