import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <div className="relative inline-block">
                <div className="bg-gradient-to-br from-[#4a9d5f] via-[#5cb36f] to-[#6bc97f] rounded-full px-8 py-2.5 shadow-lg border-4 border-[#d4a843]">
                  <span className="text-white font-bold text-2xl tracking-wide">MaintainU</span>
                </div>
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#d4a843] rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#d4a843] rounded-full"></div>
              </div>
              <p className="text-[#4a9d5f] text-xs italic mt-2" style={{ fontFamily: 'cursive' }}>Skilled People</p>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              <span className="font-semibold">MaintainU</span> comprises a team of professionals and
              technicians with extensive maintenance experience in engineering and process industries.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-[#3d4f6d]">Sitemap</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#e85d75] transition-colors text-[15px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#e85d75] transition-colors text-[15px]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#e85d75] transition-colors text-[15px]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#e85d75] transition-colors text-[15px]">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-gray-600 hover:text-[#e85d75] transition-colors text-[15px]">
                  Our works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-[#3d4f6d]">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#3d4f6d] mb-1">Address:</p>
                  <p className="text-gray-600 text-[14px] leading-relaxed">MaintainU, Plot-15, Phase-2, Mahalakshmi Nagar, Hosur-635109</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#3d4f6d] mb-1">Phone:</p>
                  <p className="text-gray-600 text-[14px]">+91 8778835471, +91 9486739127</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#e85d75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#3d4f6d] mb-1">Email:</p>
                  <p className="text-gray-600 text-[14px]">maintainu.in@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] text-white py-5">
        <div className="container mx-auto px-6 text-center text-[14px]">
          <p>Copyright 2026 [MaintainU] - Made by Ralein Nova</p>
        </div>
      </div>
    </footer>
  );
}
