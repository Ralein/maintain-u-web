import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-title text-center">WHY CHOOSE US?</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#3d4f6d] leading-tight mb-10">About us</h1>
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
