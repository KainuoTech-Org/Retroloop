"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Using local images for 100% reliability
const LOOKBOOK_ITEMS = [
  { id: 1, type: "image", src: "/lookbook/look1.jpg", aspect: "aspect-[3/4]" }, // Retro Fashion
  { id: 2, type: "image", src: "/lookbook/look2.jpg", aspect: "aspect-[4/5]" }, // Street Style
  { id: 3, type: "text", content: "Y2K VISION", aspect: "aspect-square" },
  { id: 4, type: "image", src: "/lookbook/look4.jpg", aspect: "aspect-[3/4]" }, // Menswear
  { id: 5, type: "text", content: "TIMELESS", aspect: "aspect-[16/9]" }, // Replaced broken image with text
  { id: 6, type: "image", src: "/lookbook/look6.jpg", aspect: "aspect-[3/4]" }, // Grunge
];

export default function LookbookPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red">
          {t.lookbook.title}
        </h1>
        <p className="mt-4 text-retro-black/60 font-mono text-sm tracking-widest uppercase">
          {t.lookbook.subtitle}
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
        {LOOKBOOK_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid"
          >
            {item.type === "image" ? (
              <div className={`relative w-full ${item.aspect} bg-retro-gray/10 overflow-hidden group`}>
                <Image 
                    src={item.src!} 
                    alt={`Look ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 text-white font-oswald text-2xl">
                   {t.lookbook.look} {item.id}
                </div>
              </div>
            ) : (
              <div className={`flex items-center justify-center w-full ${item.aspect} bg-retro-red p-8`}>
                <h2 className="text-5xl font-oswald font-bold text-retro-beige text-center leading-none">
                  {item.content}
                </h2>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
