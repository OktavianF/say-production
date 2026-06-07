"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Komponen Counter biar angka "lari"
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Efek Fade-Up pas di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const WHATSAPP_URL = "https://wa.me/6285649409491";

  return (
    <section
      id="beranda"
      ref={ref}
      className="fade-in-hidden relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50"
    >
      {/* Background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HERO TEXT */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            Best Documentation
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-900 mb-6 leading-[1.1]">
            Jasa Dokumentasi <span className="text-cyan-500">Profesional</span> <br />
            untuk Setiap <span className="text-orange-500">Acara Penting</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Kami menghadirkan layanan foto dan video profesional berkualitas tinggi.
            Elegan, profesional, dan abadi bersama SAY PRODUCTION.
          </p>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Pesan Sekarang
            </a>
            <Link
              href="#portofolio"
              className="px-8 py-3.5 bg-white text-blue-900 border-2 border-blue-100 hover:border-blue-300 font-bold rounded-full shadow-sm w-full sm:w-auto"
            >
              Lihat Karya Kami
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full max-w-5xl mx-auto mb-12">
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 to-orange-300 rounded-[2.5rem] opacity-20 blur-2xl"></div>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black">
            <Image
              src="/logos/wedding-rings.png"
              alt="Karya SAY PRODUCTION"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* STATISTIK BESAR */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
          {/* Acara Sukses */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-blue-900">
              <Counter end={500} suffix="+" />
            </span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Acara Sukses</span>
          </div>

          {/* Klien Puas */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-blue-900">
              <Counter end={98} suffix="%" />
            </span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Klien Puas</span>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-black text-blue-900">
              5.0
            </span>
            <div className="flex text-yellow-400 mt-1 text-2xl">
              ★★★★★
            </div>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Rating Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}