export default function OurStorySection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="">
          <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[#253C67] sm:text-[38px] lg:text-[40px]">
            Our <span className="text-[#0024DA]">Story</span>
          </h2>

          <p className="mt-4 w-full text-sm leading-6 text-[#929292] sm:text-[16px] sm:leading-7">
            Javier Perez&apos;s journey is one of resilience and purpose. In 2016, a
            life-changing accident struck when a drunk driver hit him while he was
            coaching his son&apos;s baseball game, resulting in the loss of both his legs.
            Despite the odds, Javi fought through recovery, supported by his family
            and his own determination. During his healing, he discovered the
            transformative power of hormone therapy, which restored his energy,
            mood, and quality of life.
            <br className="hidden sm:block" />
            Inspired by his own journey, Javi founded Modern Med Center. His mission
            is to help others achieve optimal wellness through personalized,
            holistic care. At Modern Med Centers, we believe in turning life&apos;s
            challenges into opportunities for growth—empowering you to live
            healthier, stronger, and more vibrant every day.
          </p>
        </div>

        {/* Video Card */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#dfe4eb] shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
            {/* Background Pattern */}
            <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] w-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(255,255,255,0.22),_transparent_45%)]" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1200 700"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1200" height="700" fill="#dfe4eb" />

                {[
                  -320, -240, -160, -80, 0, 80, 160, 240, 320, 400, 480, 560,
                ].map((offset, i) => (
                  <path
                    key={i}
                    d={`M ${120 + offset} 0 C ${260 + offset} 160, ${440 + offset} 320, ${650 + offset} 700`}
                    stroke="rgba(255,255,255,0.72)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                ))}

                {[
                  -220, -140, -60, 20, 100, 180, 260, 340, 420, 500,
                ].map((offset, i) => (
                  <path
                    key={`r-${i}`}
                    d={`M ${980 + offset} 0 C ${860 + offset} 180, ${760 + offset} 360, ${880 + offset} 700`}
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              {/* Play Button */}
              <button
                type="button"
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2d2d2d] bg-white/10 backdrop-blur-[1px] transition duration-300 hover:scale-105 sm:h-20 sm:w-20 md:h-24 md:w-24"
              >
                <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-[#2d2d2d] sm:border-y-[14px] sm:border-l-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}