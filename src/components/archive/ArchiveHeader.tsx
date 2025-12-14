"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ArchiveHeader() {
  const { t } = useLanguage();
  return (
    <div className="mb-8">
       <h1 className="text-4xl md:text-6xl font-oswald font-bold uppercase text-retro-black mb-4">
          {t.archive.title}
       </h1>
       <div className="h-1 w-24 bg-retro-red" />
    </div>
  );
}