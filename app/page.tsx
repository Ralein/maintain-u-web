import Link from "next/link";
import WorldMapSection from "@/components/WorldMapSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5] py-24 min-h-[600px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#3d4f6d] leading-tight">
                Hire experts &<br />
                Get your job done
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to <span className="font-semibold text-[#3d4f6d]">MaintainU</span>. We are dedicated to providing a
                comprehensive range of maintenance services tailored for the industrial sector.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="btn-primary text-lg">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full h-[500px] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                <svg className="w-96 h-96 text-blue-400 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-[#3d4f6d] mb-16" style={{ fontFamily: 'cursive' }}>
            Our Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
            {[
              { name: 'HONDA', color: '#cc0000' },
              { name: 'TEAL', color: '#2c5f2d' },
              { name: 'Blubee', color: '#0066cc' },
              { name: 'VE', color: '#1a1a1a' },
              { name: 'DB Santasalo', color: '#d32f2f' },
              { name: 'CUMI', color: '#1976d2' },
              { name: 'PSP', color: '#0288d1' },
              { name: 'MAN', color: '#e53935' },
              { name: 'MAGTORQ', color: '#f57c00' },
              { name: 'OSRT', color: '#0097a7' },
              { name: 'VINIR', color: '#c62828' },
              { name: 'BPS', color: '#1565c0' }
            ].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-2xl font-bold" style={{ color: client.color }}>
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-title text-center">WHY CHOOSE US?</p>
            <h2 className="heading-medium mb-10">About us</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At <span className="font-semibold text-[#3d4f6d]">MaintainU</span>, we specialize in comprehensive maintenance services for the industrial
                sector. Our experienced team brings extensive expertise in engineering and process industries.
              </p>
              <p>
                We provide electrical and mechanical maintenance and installations, ensuring your
                systems and machinery operate efficiently and reliably.
              </p>
              <p>
                Our mission is to deliver fast, efficient, safe, and cost-effective services. We are committed
                to exceeding your expectations with top-quality solutions at competitive prices.
              </p>
            </div>
            <div className="mt-12">
              <Link href="/services" className="btn-primary text-lg">
                Our Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-title text-center">OUR SERVICES</p>
            <h2 className="heading-medium">All kind of solutions for you</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full border-[6px] border-[#e85d75] flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-20 h-20 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#3d4f6d]">Mechanical Services</h3>
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

            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full border-[6px] border-[#e85d75] flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-20 h-20 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#3d4f6d]">Electrical Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <WorldMapSection />
    </main>
  );
}
