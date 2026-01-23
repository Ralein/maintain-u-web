"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll spy for home page sections
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["hero", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (path: string, section?: string) => {
    if (pathname === "/works" && path === "/works") return true;
    if (pathname === "/" && section && activeSection === section) return true;
    if (pathname === "/" && path === "/" && !section && activeSection === "hero") return true;
    return false;
  };

  const getLinkHref = (section: string) => {
    return pathname === "/" ? `#${section}` : `/#${section}`;
  };

  const linkClasses = (active: boolean) =>
    `text-[15px] font-medium transition-all duration-300 relative ${active ? "text-[#e85d75]" : "text-gray-700 hover:text-[#e85d75]"
    }`;

  const Underline = () => (
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#e85d75] rounded-full" />
  );

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
            <Link href={getLinkHref("hero")} className={linkClasses(isActive("/", "hero"))}>
              Home
              {isActive("/", "hero") && <Underline />}
            </Link>
            <Link href={getLinkHref("about")} className={linkClasses(isActive("/", "about"))}>
              About us
              {isActive("/", "about") && <Underline />}
            </Link>
            <Link href={getLinkHref("services")} className={linkClasses(isActive("/", "services"))}>
              Services
              {isActive("/", "services") && <Underline />}
            </Link>
            <Link href={getLinkHref("contact")} className={linkClasses(isActive("/", "contact"))}>
              Contact us
              {isActive("/", "contact") && <Underline />}
            </Link>
            <Link href="/works" className={linkClasses(isActive("/works"))}>
              Our works
              {isActive("/works") && <Underline />}
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
            <Link href={getLinkHref("hero")} className="text-gray-700 hover:text-[#e85d75]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href={getLinkHref("about")} className="text-gray-700 hover:text-[#e85d75]" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link href={getLinkHref("services")} className="text-gray-700 hover:text-[#e85d75]" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href={getLinkHref("contact")} className="text-gray-700 hover:text-[#e85d75]" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
            <Link href="/works" className="text-gray-700 hover:text-[#e85d75]" onClick={() => setIsMenuOpen(false)}>Our works</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
