import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      {/* Services Header Section */}
      <section className="py-24 bg-gradient-to-br from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="section-title text-center">OUR SERVICES</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#3d4f6d] leading-tight">All kind of solutions for you</h1>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Mechanical Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full border-[6px] border-[#e85d75] flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-20 h-20 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#3d4f6d]">Mechanical Services</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-[#5fcc6f] text-white px-8 py-4 rounded-full text-center font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
                  Overhaul and Repair
                </div>
                <div className="bg-[#5fcc6f] text-white px-8 py-4 rounded-full text-center font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
                  Parts Replacement
                </div>
                <div className="bg-[#5fcc6f] text-white px-8 py-4 rounded-full text-center font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
                  Preventive Maintenance
                </div>
                <div className="bg-[#5fcc6f] text-white px-8 py-4 rounded-full text-center font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
                  Machine Installations
                </div>
                <div className="bg-[#5fcc6f] text-white px-8 py-4 rounded-full text-center font-semibold text-lg shadow-md hover:shadow-lg transition-shadow">
                  Labour Contracting
                </div>
              </div>
            </div>

            {/* Electrical Services */}
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full border-[6px] border-[#e85d75] flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-20 h-20 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#3d4f6d]">Electrical Services</h2>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3d4f6d 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3d4f6d] mb-6 leading-tight">
            Interested To<br />
            Get Our Service?
          </h2>
          <Link href="/contact" className="btn-primary text-lg mt-4">
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
