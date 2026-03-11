export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#f3f3f3]">
      <div className="mx-auto flex min-h-[300px] max-w-7xl flex-col items-center justify-center px-4 py-14 text-center sm:min-h-[360px] sm:px-6 sm:py-16 lg:min-h-[420px] lg:px-8 lg:py-20">
        
        {/* Icon Circle */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A7EA41A] sm:h-16 sm:w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0b84b8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7"
          >
            <path d="M19 14c1.49-1.46 2-3.24 2-5a5 5 0 0 0-5-5c-1.76 0-3.54.5-5 2-1.46-1.5-3.24-2-5-2a5 5 0 0 0-5 5c0 1.76.51 3.54 2 5l8 8Z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl lg:text-5xl">
          About Us
        </h2>

        {/* Subtitle */}
        <p className="mt-5 max-w-3xl text-sm leading-6 text-[#282828] sm:mt-6 sm:text-base lg:text-[16px]">
          Empowering patients across Africa with accessible, transparent, and
          innovative healthcare solutions
        </p>
      </div>
    </section>
  );
}