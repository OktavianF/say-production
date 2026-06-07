"use client"; // Wajib ada untuk hook
import { useEffect, useRef } from 'react';
import Image from "next/image";

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

export default function Portfolio() {
  const ref = useFadeIn(); // Panggil hook-nya di sini
  
  const portfolioItems = [
    { id: 1, title: "Wedding Agus & Habiba", category: "Wedding", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80" },
    { id: 2, title: "Prewedding Outdoor", category: "Prewedding", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80" },
    { id: 3, title: "Siraman & Pengajian", category: "Traditional", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80" },
    { id: 4, title: "Engagement Event", category: "Engagement", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80" },
    { id: 5, title: "Corporate Gathering", category: "Event", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" },
    { id: 6, title: "Product Photography", category: "Commercial", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" },
  ];

  return (
    // Tambahin ref={ref} dan class fade-in-hidden
    <section id="portofolio" ref={ref} className="fade-in-hidden py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Karya Terbaik Kami</span>
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mt-3 mb-4">Galeri Dokumentasi</h2>
          <p className="text-gray-600 font-medium">Momen-momen berharga yang telah kami abadikan dengan sentuhan visual yang profesional.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden aspect-square shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-100 border border-slate-100"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}