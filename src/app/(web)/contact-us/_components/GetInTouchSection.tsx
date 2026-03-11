import Image from "next/image";

export default function GetInTouchSection() {
  return (
    <section className="w-full  py-12 sm:py-16 lg:py-20">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
           <div className="max-w-xl">
              <h2 className="text-[32px] font-semibold leading-tight text-[#2d4778] sm:text-[40px]">
                Get in <span className="text-[#1c46ff]">Touch</span>
              </h2>
              <p className="mt-3 text-sm text-[#8f8f8f] sm:text-[15px]">
                Fill out the form below and we&apos;ll respond within 24 hours
              </p>
            </div>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left Content */}

          
          <div>
         

            <form className="mt-8 space-y-5 sm:mt-10">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-base font-medium text-[#2F2F2F]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name Here"
                  className="h-[52px] w-full rounded-md border border-[#C0C3C1] bg-transparent px-4 text-[15px] text-[#333] outline-none transition placeholder:text-[#9d9d9d] focus:border-[#1c46ff]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-base font-medium text-[#2F2F2F]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  className="h-[52px] w-full rounded-md border border-[#C0C3C1] bg-transparent px-4 text-[15px] text-[#333] outline-none transition placeholder:text-[#9d9d9d] focus:border-[#1c46ff]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-base font-medium text-[#2F2F2F]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+1234567890"
                  className="h-[52px] w-full rounded-md border border-[#C0C3C1] bg-transparent px-4 text-[15px] text-[#333] outline-none transition placeholder:text-[#9d9d9d] focus:border-[#1c46ff]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-base font-medium text-[#2F2F2F]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  placeholder="Write your message here..."
                  className="min-h-[170px] w-full rounded-md border border-[#C0C3C1] bg-transparent px-4 py-3 text-[15px] text-[#333] outline-none transition placeholder:text-[#9d9d9d] focus:border-[#1c46ff] sm:min-h-[190px]"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border border-[#bdbdbd]"
                />
                <label
                  htmlFor="consent"
                  className="text-xs leading-5 text-[#8E938F] sm:text-[14px]"
                >
                  I consent to having this website store my submitted information
                  so they can respond to my inquiry. See our{" "}
                  <span className="text-[#1c46ff]">privacy policy</span> to learn
                  more about how we use data.
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex h-[52px] w-full items-center justify-center rounded-md bg-[#0024DA] px-6 text-[15px] font-medium text-white transition hover:bg-[#0b2fd4]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="mx-auto w-full max-w-[420px] lg:mt-[54px] lg:max-w-none">
            <div className="relative  w-full overflow-hidden rounded-tr-[12px] rounded-br-[12px] h-[300px]  lg:h-[520px] lg:aspect-auto">
              <Image
                src="/contact.png"
                alt="Doctor with digital healthcare interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}