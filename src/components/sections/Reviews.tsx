"use client"; // Wajib ada untuk hook
import { useEffect, useRef } from 'react';

// Hook biar nggak ribet bikin file baru
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
      });
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Reviews() {
  const ref = useFadeIn(); // Panggil hook-nya di sini
  
  const reviews = [
    { id: 1, name: "Klien Google", time: "7 tahun lalu", text: "Mantul", rating: 5 },
    { id: 2, name: "Klien Google", time: "7 tahun lalu", text: "Mantap", rating: 5 },
    { id: 3, name: "Klien Google", time: "5 tahun lalu", text: "Pelayanan sangat memuaskan.", rating: 5 },
  ];

  return (
    // Tambahin ref={ref} dan class fade-in-hidden di sini
    <section id="ulasan" ref={ref} className="fade-in-hidden py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BAGIAN ATAS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-2">
              Apa Kata Klien Kami
            </h2>
            <p className="text-gray-600 font-medium">
              Berdasarkan ulasan asli di Google Maps
            </p>
          </div>

          <div className="flex items-center gap-6 bg-slate-50 px-8 py-6 rounded-2xl border border-slate-100">
            <div className="text-center">
              <span className="text-6xl font-black text-blue-900 block">5.0</span>
              <div className="flex text-yellow-400 mt-2 text-xl justify-center">
                ★ ★ ★ ★ <span className="text-yellow-400/50">★</span>
              </div>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH (MARQUEE) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[350px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-shrink-0 relative group"
              >
                <div className="absolute top-6 right-8 text-6xl text-cyan-100 font-serif">"</div>
                <div className="flex text-yellow-400 mb-6 text-lg">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-700 text-lg font-medium italic mb-8">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{review.name}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {review.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}