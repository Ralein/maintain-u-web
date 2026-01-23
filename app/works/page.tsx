"use client";

export default function WorksPage() {
  return (
    <main className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-title text-center">OUR PORTFOLIO</p>
          <h2 className="heading-medium">Our works</h2>
        </div>

        <h3 className="text-3xl font-bold text-[#3d4f6d] mb-8 text-center">L2000 GEAR HOBBING MACHINE</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Professional maintenance and repair services for industrial machinery. Our expert team ensures your equipment operates at peak efficiency.
          </p>
        </div>
      </div>
    </main>
  );
}
