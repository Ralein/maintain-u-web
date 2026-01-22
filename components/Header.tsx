"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#4a9d5f] via-[#5cb36f] to-[#6bc97f] rounded-full px-8 py-2.5 shadow-lg border-4 border-[#d4a843]">
                <span className="text-white font-bold text-2xl tracking-wide">MaintainU</span>
              </div>
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#d4a843] rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#d4a843] rounded-full"></div>
            </div>
            <p className="text-[#4a9d5f] text-xs italic mt-1 ml-2" style={{ fontFamily: 'cursive' }}>Skilled People</p>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-700 hover:text-[#e85d75] transition-colors font-medium text-[15px]">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#e85d75] transition-colors font-medium text-[15px]">
              About us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#e85d75] transition-colors font-medium text-[15px]">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#e85d75] transition-colors font-medium text-[15px]">
              Contact us
            </Link>
            <Link href="/works" className="text-gray-700 hover:text-[#e85d75] transition-colors font-medium text-[15px]">
              Our works
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-[#e85d75]">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#e85d75]">About us</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#e85d75]">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#e85d75]">Contact us</Link>
            <Link href="/works" className="text-gray-700 hover:text-[#e85d75]">Our works</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
