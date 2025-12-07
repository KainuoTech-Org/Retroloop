"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Mock Lookbook Data (Using color placeholders for now)
const LOOKBOOK_ITEMS = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 2, type: "image", src: "https://images.unsplash.com/photo-1529139574466-a302d27f60d0?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[4/5]" },
  { id: 3, type: "text", content: "Y2K VISION", aspect: "aspect-square" },
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/4]" },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[16/9]" },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", aspect: "aspect-[3/4]" },
];

export default function LookbookPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red">
          Lookbook
        </h1>
        <p className="mt-4 text-retro-black/60 font-mono text-sm tracking-widest uppercase">
          Styling the Archive
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
                {/* In real app: <Image src={item.src} alt="Lookbook" fill className="object-cover" /> */}
                <Image 
                    src={item.src!} 
                    alt={`Look ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 text-white font-oswald text-2xl">
                   LOOK {item.id}
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
