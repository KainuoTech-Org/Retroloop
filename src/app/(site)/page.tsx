"use client";

import { Countdown } from "@/components/ui/countdown";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { InstagramFeed } from "@/components/ui/InstagramFeed";

// Using local SVGs for maximum reliability and vintage styling
const BRANDS = [
  { name: "Carhartt", logo: "/brands/carhartt_vintage.png" },
  { name: "Nike", logo: "/brands/nike_vintage.png" },
  { name: "Stussy", logo: "/brands/stussy_vintage.png" },
  { name: "Levi's", logo: "/brands/levis_vintage.png" },
  { name: "Ralph Lauren", logo: "/brands/ralph_vintage.png" },
  { name: "Dickies", logo: "/brands/dickies_vintage.png" },
  { name: "Adidas", logo: "/brands/adidas_vintage.png" },
];

export default function Home() {
  const { t } = useLanguage();

  // Set next drop date to next Friday 8PM
  const nextDropDate = new Date();
  nextDropDate.setDate(nextDropDate.getDate() + ((5 + 7 - nextDropDate.getDay()) % 7));
  nextDropDate.setHours(20, 0, 0, 0);

  return (
    <div className="flex flex-col w-full">
       {/* Hero Section with Vintage Image Background */}
       <section className="relative flex flex-col items-center justify-center min-h-[90vh] py-20 px-4 overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop" // More "Archive" feel
              alt="Vintage Archive Background"
              fill
              className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
              priority
            />
            <div className="absolute inset-0 bg-retro-beige/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-retro-beige via-transparent to-transparent" />
         </div>

         <div className="relative z-10 text-center">
           <div className="inline-block mb-4 px-4 py-1 border-2 border-retro-red bg-retro-beige/80 backdrop-blur-sm text-retro-red text-xs font-bold uppercase tracking-widest rounded-full">
              {t.hero.badge}
           </div>
           <h1 className="text-6xl md:text-[10rem] font-oswald font-bold text-retro-red tracking-tighter leading-[0.85] drop-shadow-xl mix-blend-hard-light mb-6">
             RETROLOOP<br/>ARCHIVE
           </h1>
           <p className="mt-4 text-lg md:text-2xl font-medium tracking-[0.2em] uppercase text-retro-black bg-retro-beige/60 inline-block px-4 py-2 backdrop-blur-sm">
             {t.hero.slogan}
           </p>
           
           {/* Countdown */}
           <div className="mt-16 mb-12 p-6 bg-retro-beige/40 backdrop-blur-md rounded-xl border border-retro-black/10 inline-block">
             <div className="text-center text-sm font-bold uppercase tracking-widest mb-4 opacity-80 text-retro-black">{t.hero.nextDrop}</div>
             <Countdown targetDate={nextDropDate} />
           </div>
           
           <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
             <Link href="/archive" className="px-8 py-4 bg-retro-red text-retro-beige font-oswald text-xl font-bold uppercase hover:bg-retro-black transition-colors duration-300 shadow-lg">
               {t.hero.enterArchive}
             </Link>
             <Link href="/visit" className="flex items-center gap-2 px-8 py-4 bg-retro-beige/80 backdrop-blur-sm border-2 border-retro-black text-retro-black font-oswald text-xl font-bold uppercase hover:bg-retro-black hover:text-retro-beige transition-colors duration-300">
               <Calendar className="w-5 h-5" />
               {t.nav.bookVisit}
             </Link>
           </div>
         </div>
       </section>

       {/* Brands Section (The Forest Style) */}
       <section className="py-20 bg-retro-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase tracking-wide text-retro-black">
                   {t.brands.title}
                </h2>
                <div className="h-1 w-24 bg-retro-red mx-auto mt-4" />
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-4">
                {BRANDS.map((brand, idx) => (
                  <motion.div 
                    key={brand.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="aspect-square flex flex-col items-center justify-center bg-white border border-retro-black/10 hover:border-retro-red hover:shadow-[4px_4px_0px_0px_rgba(139,0,0,1)] transition-all duration-300 group cursor-default p-4 overflow-hidden"
                  >
                     {/* Vintage Logo Image */}
                     <div className="w-full h-full relative opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 mix-blend-multiply grayscale group-hover:grayscale-0">
                        <Image 
                          src={brand.logo} 
                          alt={brand.name} 
                          fill 
                          className="object-contain"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>
       </section>

       {/* Instagram Feed Section (Replaces Static Featured Products) */}
       <InstagramFeed />
    </div>
  );
}
