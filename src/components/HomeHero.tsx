import React from "react";

function HomeHero() {
  return (
    <section className="relative w-full h-[93vh]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home-hero.png')" }}
      />

      {/* Dark Blue Overlay */}
      {/* <div className="absolute inset-0 bg-[#19191 966]/10" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-[11%]">

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[120%] mb-4">
          MODERN APPROACH 
        </h1>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[120%] ">To Wellness</h1>

        <p className="text-base font-normal leading-[150%] text-[#E5E5E5] my-5">
          A cost-effective, medically supervised solution for lasting weight loss.
        </p>

        <button className="px-8 py-3 text-[24px] leading-[120%] font-medium rounded-full bg-[#7DBAED] border-white/40 text-black backdrop-blur-sm hover:bg-[#7DBAED]/90 transition-all duration-200 w-[197px] h-[63px]">
          Start now
        </button>

      </div>
    </section>
  );
}

export default HomeHero;