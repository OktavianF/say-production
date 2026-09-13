"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Ulasan", href: "#ulasan" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#beranda"); // <--- State buat aktif link

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Deteksi section yang lagi aktif
      const sections = NAV_LINKS.map(link => document.querySelector(link.href));
      sections.forEach(section => {
        if (section) {
          const top = (section as HTMLElement).offsetTop - 100;
          if (window.scrollY >= top) setActiveSection("#" + section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 py-3 shadow-lg" : "bg-white/80 py-4"}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#beranda" className="flex items-center gap-3">
             <Image src="/logos/logo.png" alt="Logo" width={45} height={45} className="object-contain" />
             <div className="hidden sm:block">
                <p className="text-blue-900 font-black tracking-widest text-sm">SAY PRODUCTION</p>
                <p className="text-cyan-500 font-bold text-[10px] tracking-[0.2em] uppercase">Best Documentation</p>
             </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                    activeSection === link.href 
                    ? "text-cyan-600 bg-cyan-50" // WARNA PAS AKTIF
                    : "text-gray-600 hover:text-cyan-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button CTA */}
          <a href="https://wa.me/6285649409491" target="_blank" className="hidden md:block bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-500 transition-all shadow-md">
            Hubungi Kami
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
          <div className="px-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                      activeSection === link.href 
                      ? "text-cyan-600 bg-cyan-50" 
                      : "text-gray-600 hover:text-cyan-500 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/6285649409491" 
              target="_blank" 
              className="bg-blue-900 text-white text-center px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-orange-500 transition-all"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}