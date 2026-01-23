import Link from "next/link";
import WorldMapSection from "@/components/WorldMapSection";

export default function ServicesPage() {
  return (
    <main>
      {/* Services Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-4">
            <p className="section-title text-center">OUR SERVICES</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#3d4f6d] leading-tight italic">
              All kind of solutions for you
            </h1>
            {/* Red underline */}
            <div className="w-16 h-1 bg-[#e85d75] mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Services Content Section - Horizontal Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Horizontal layout: Icon - Pills - Icon */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

              {/* Mechanical Services - Left */}
              <div className="flex flex-col items-center text-center flex-shrink-0">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-[5px] border-[#e85d75] flex items-center justify-center mb-4">
                  <svg className="w-14 h-14 lg:w-16 lg:h-16 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-lg lg:text-xl font-bold text-[#3d4f6d]">Mechanical<br />Services</h2>
              </div>

              {/* Service Pills - Center (Staggered Layout) */}
              <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 py-4">
                {/* Left column of pills */}
                <div className="flex flex-col gap-4 items-end">
                  <div className="bg-[#5fcc6f] text-white px-6 py-3 rounded-full text-center font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    Overhaul and<br />Repair
                  </div>
                  <div className="bg-[#5fcc6f] text-white px-6 py-3 rounded-full text-center font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer lg:mr-8">
                    Parts<br />Replacement
                  </div>
                </div>

                {/* Center pill */}
                <div className="bg-[#5fcc6f] text-white px-6 py-3 rounded-full text-center font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer lg:mt-8">
                  Preventive<br />Maintenance
                </div>

                {/* Right column of pills */}
                <div className="flex flex-col gap-4 items-start">
                  <div className="bg-[#5fcc6f] text-white px-6 py-3 rounded-full text-center font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                    Machine<br />Installations
                  </div>
                  <div className="bg-[#5fcc6f] text-white px-6 py-3 rounded-full text-center font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer lg:ml-8">
                    Labour<br />Contracting
                  </div>
                </div>
              </div>

              {/* Electrical Services - Right */}
              <div className="flex flex-col items-center text-center flex-shrink-0">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full border-[5px] border-[#e85d75] flex items-center justify-center mb-4">
                  <svg className="w-14 h-14 lg:w-16 lg:h-16 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-lg lg:text-xl font-bold text-[#3d4f6d]">Electrical<br />Services</h2>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WorldMapSection />
    </main>
  );
}
