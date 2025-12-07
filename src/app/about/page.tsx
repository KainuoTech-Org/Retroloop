"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4">
         <div className="max-w-3xl text-center space-y-8">
           <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red">
             {t.about.title}
           </h1>
           <p className="text-xl md:text-2xl font-mono leading-relaxed">
             {t.about.p1}
           </p>
           <p className="text-base md:text-lg opacity-80 leading-relaxed">
             {t.about.p2}
           </p>
           
           <div className="pt-8">
              <span className="block font-oswald text-xl uppercase tracking-widest mb-2">{t.about.established}</span>
              <span className="text-4xl font-bold">2023</span>
           </div>
         </div>
      </div>
    );
  }
