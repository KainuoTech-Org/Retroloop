"use client";

import Link from "next/link";
import { Instagram, MapPin } from "lucide-react"; // Using Lucide icons
import { Marquee } from "@/components/ui/marquee";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-retro-black text-retro-beige pt-0">
      {/* Marquee Section */}
      <div className="border-y border-retro-beige/20 bg-retro-red py-2">
         <Marquee className="text-retro-beige py-2" duration={20}>
            <span className="text-xl font-oswald font-bold mx-8">NEW DROP EVERY FRIDAY 8PM</span>
            <span className="text-xl font-oswald font-bold mx-8">•</span>
            <span className="text-xl font-oswald font-bold mx-8">HK VINTAGE ARCHIVE</span>
            <span className="text-xl font-oswald font-bold mx-8">•</span>
            <span className="text-xl font-oswald font-bold mx-8">WORLDWIDE SHIPPING</span>
            <span className="text-xl font-oswald font-bold mx-8">•</span>
            <span className="text-xl font-oswald font-bold mx-8">TIMELESS PIECES</span>
            <span className="text-xl font-oswald font-bold mx-8">•</span>
         </Marquee>
      </div>
      
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <h2 className="font-oswald text-3xl font-bold">RETROLOOP.</h2>
          <p className="text-sm opacity-80 max-w-xs leading-relaxed">
            Timeless Pieces for Modern Souls. <br/>
            Curating the finest vintage fashion in Hong Kong since 2023. Not just a shop, but an archive.
          </p>
        </div>

        {/* Shop Links */}
        <div>
           <h3 className="font-oswald text-xl font-bold mb-6 text-retro-red">{t.nav.archive}</h3>
           <ul className="space-y-3 text-sm">
             <li><Link href="/archive" className="hover:text-retro-red transition-colors">New Arrivals</Link></li>
             <li><Link href="/archive?cat=tops" className="hover:text-retro-red transition-colors">Tops & Tees</Link></li>
             <li><Link href="/archive?cat=outerwear" className="hover:text-retro-red transition-colors">Outerwear</Link></li>
             <li><Link href="/archive?cat=bottoms" className="hover:text-retro-red transition-colors">Bottoms</Link></li>
             <li><Link href="/lookbook" className="hover:text-retro-red transition-colors">{t.nav.lookbook}</Link></li>
           </ul>
        </div>

        {/* Info Links */}
        <div>
           <h3 className="font-oswald text-xl font-bold mb-6 text-retro-red">INFO</h3>
           <ul className="space-y-3 text-sm">
             <li><Link href="/about" className="hover:text-retro-red transition-colors">{t.nav.about}</Link></li>
             <li><Link href="/visit" className="hover:text-retro-red transition-colors">{t.nav.visit}</Link></li>
             <li><Link href="/sizing" className="hover:text-retro-red transition-colors">Sizing Guide</Link></li>
             <li><Link href="/condition" className="hover:text-retro-red transition-colors">Condition Grading</Link></li>
             <li><Link href="/terms" className="hover:text-retro-red transition-colors">Terms & Shipping</Link></li>
           </ul>
        </div>

        {/* Connect / Social */}
        <div>
           <h3 className="font-oswald text-xl font-bold mb-6 text-retro-red">CONNECT</h3>
           <div className="flex space-x-4 mb-6">
             <Link href="https://instagram.com" target="_blank" className="w-10 h-10 bg-retro-beige/10 rounded-full flex items-center justify-center hover:bg-retro-red hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
             </Link>
             <Link href="/visit" className="w-10 h-10 bg-retro-beige/10 rounded-full flex items-center justify-center hover:bg-retro-red hover:text-white transition-all duration-300">
                <MapPin className="w-5 h-5" />
             </Link>
           </div>
           <p className="text-xs opacity-50">
             © {new Date().getFullYear()} RetroLoop Archive.<br/>{t.footer.rights}
           </p>
        </div>
      </div>
    </footer>
  );
}
