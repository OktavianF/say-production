import Link from "next/link";

export default function Location() {
  return (
    <section id="lokasi" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 font-bold tracking-widest text-sm uppercase shadow-sm bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-100">
            Kunjungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mt-6 mb-4">Lokasi & Kontak Studio</h2>
          <p className="text-gray-600 font-medium text-lg">Silakan datang ke studio kami atau hubungi kontak di bawah ini untuk konsultasi dokumentasi acara Anda.</p>
        </div>

        {/* Layout Kiri (Info) & Kanan (Peta) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Informasi Detail */}
          <div className="flex flex-col gap-8 bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            
            {/* Alamat */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500 border border-orange-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Alamat Studio</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Porobo, Mojodadi, Lopang, Kec. Kembangbahu,<br />
                  Kabupaten Lamongan, Jawa Timur 62282
                </p>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-cyan-600 border border-cyan-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Jam Operasional</h3>
                <p className="text-gray-600 font-medium">
                  Setiap Hari<br />
                  <span className="font-bold text-orange-500">Tutup pukul 17.00 WIB</span>
                </p>
              </div>
            </div>

            {/* Kontak WA */}
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-600 border border-green-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Kontak / WhatsApp</h3>
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/6285649409491" target="_blank" className="text-gray-600 font-medium hover:text-cyan-600 transition-colors">
                    <span className="font-bold text-blue-900">Orderan:</span> 0856-4940-9491
                  </a>
                  <a href="https://wa.me/6281357642730" target="_blank" className="text-gray-600 font-medium hover:text-cyan-600 transition-colors">
                    <span className="font-bold text-blue-900">Info Lain:</span> 0812-3081-3044
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Peta Google Maps */}
          <div className="w-full h-full min-h-[450px] bg-slate-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Porobo%2C%20Mojodadi%2C%20Lopang%2C%20Lamongan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter contrast-100"
            ></iframe>
            
            {/* Overlay Tombol Arahkan ke Aplikasi Maps */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
              <a 
                href="https://maps.app.goo.gl/3zW6Xo7zZGseNhDP6?g_st=ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pointer-events-auto bg-blue-900 text-white px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Buka di Aplikasi Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}