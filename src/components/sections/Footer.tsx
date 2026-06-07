import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 pt-16 pb-8 border-t-[8px] border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* KOLOM 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white p-2 rounded-lg mb-4">
              <Image
                src="/logos/logo.png"
                alt="SAY PRODUCTION"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Abadikan momen spesial Anda bersama tim profesional. Kualitas premium untuk kenangan yang abadi.
            </p>
          </div>

          {/* KOLOM 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold mb-4">Menu Utama</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><a href="#beranda" className="hover:text-cyan-400">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-cyan-400">Layanan</a></li>
              <li><a href="#portofolio" className="hover:text-cyan-400">Portofolio</a></li>
            </ul>
          </div>

          {/* KOLOM 3 (FIXED ICONS) */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold mb-4">Temukan Kami</h3>

            <div className="flex justify-center md:justify-end gap-3 text-white">

              {/* WhatsApp */}
              <a
                href="https://wa.me/6285649409491"
                target="_blank"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all"
              >
                <FaWhatsapp size={20} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-all"
              >
                <FaInstagram size={20} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4267B2] transition-all"
              >
                <FaFacebook size={20} />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-all"
              >
                <FaTiktok size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} SAY PRODUCTION. All rights reserved. | Built by Arya
        </div>

      </div>
    </footer>
  );
}