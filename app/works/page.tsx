
import Link from "next/link";

export default function WorksPage() {
  return (
    <main>
      {/* Works Header Section */}
      <section className="py-20 bg-gradient-to-br from-[#f0f4f8] via-[#e8f5e9] to-[#f3e5f5]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold text-[#3d4f6d]">Our works</h1>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Link href="/" className="hover:text-[#e85d75] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
              <span>/</span>
              <span className="text-[#3d4f6d] font-medium">Our works</span>
            </div>
          </div>
        </div>
      </section>

      {/* Works Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#3d4f6d] mb-12">L2000 GEAR HOBBING MACHINE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Professional maintenance and repair services for industrial machinery. Our expert team ensures your equipment operates at peak efficiency.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
