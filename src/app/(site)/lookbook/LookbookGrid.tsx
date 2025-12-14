"use client";

import Image from "next/image";
import { Paperclip, Pin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";

import { useLanguage } from "@/context/LanguageContext";

interface LookbookItem {
  _id: string;
  type: "image" | "text";
  image?: any;
  textContent?: string;
  aspect: string;
  rotation?: string;
  caption?: string;
  captionKey?: string; // Add this for translation key
}

export function LookbookGrid({ items }: { items: LookbookItem[] }) {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Mock Data for Demo (Fallback when Sanity is empty)
  const MOCK_LOOKBOOK: LookbookItem[] = [
    { 
      _id: "mock-1", 
      type: "image", 
      image: "/lookbook/look1.jpg?v=2", 
      aspect: "aspect-[3/4]",
      rotation: "rotate-2",
      caption: t.archive.mock.summerVibes
    },
    { 
      _id: "mock-2", 
      type: "image", 
      image: "/lookbook/look2.jpg?v=2", 
      aspect: "aspect-[4/5]",
      rotation: "-rotate-1",
      caption: t.archive.mock.nikeSwoosh
    },
    { 
      _id: "mock-3", 
      type: "text", 
      textContent: t.archive.mock.nostalgia, 
      aspect: "aspect-square",
      rotation: "rotate-3",
      caption: t.archive.mock.manifesto
    },
    { 
      _id: "mock-4", 
      type: "image", 
      image: "/lookbook/look4.jpg?v=2", 
      aspect: "aspect-[3/4]",
      rotation: "-rotate-2",
      caption: t.archive.mock.carhartt
    },
    { 
      _id: "mock-5", 
      type: "text", 
      textContent: t.archive.mock.rawDenim, 
      aspect: "aspect-[16/9]",
      rotation: "rotate-1",
      caption: t.archive.mock.fabricDetails
    },
    { 
      _id: "mock-6", 
      type: "image", 
      image: "/lookbook/look6.jpg?v=2", 
      aspect: "aspect-[3/4]",
      rotation: "rotate-2",
      caption: t.archive.mock.selvedge
    },
    { 
      _id: "mock-7", 
      type: "image", 
      image: "/lookbook/ig_leather.jpg", 
      aspect: "aspect-square",
      rotation: "-rotate-3",
      caption: t.archive.mock.leatherPatina
    },
  ];

  const displayItems = items.length > 0 ? items : MOCK_LOOKBOOK;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotate: 0 },
    show: (rotation: number) => ({
      opacity: 1,
      y: 0,
      rotate: rotation,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    })
  } as any;

  const getRotationValue = (rotation?: string) => {
    switch(rotation) {
      case "rotate-1": return 1;
      case "rotate-2": return 2;
      case "rotate-3": return 3;
      case "-rotate-1": return -1;
      case "-rotate-2": return -2;
      case "-rotate-3": return -3;
      default: return 0;
    }
  };

  return (
    <>
      <div className="mb-20 text-center">
         <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase text-retro-black mb-4 tracking-tighter">
            {t.lookbook.visualArchive}
         </h1>
         <div className="inline-block bg-retro-red text-retro-beige px-4 py-1 transform -rotate-2">
           <p className="font-mono text-sm tracking-widest uppercase">
              {t.lookbook.vol}
           </p>
         </div>
      </div>

      <motion.div 
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-12 px-4 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {displayItems.map((item, idx) => (
          <motion.div 
            key={item._id}
            custom={getRotationValue(item.rotation)}
            variants={itemVariants}
            className={`relative break-inside-avoid ${item.rotation || 'rotate-0'} cursor-pointer hover:z-20`}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            onClick={() => setSelectedId(item._id)}
            layoutId={`card-${item._id}`}
          >
            {/* Pin or Tape Effect (Random) */}
            {idx % 2 === 0 ? (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-8 h-8 flex items-center justify-center text-gray-400 drop-shadow-md">
                <Pin className="w-8 h-8 fill-gray-800 text-gray-800 opacity-80" />
              </div>
            ) : (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-24 h-8 bg-yellow-100/40 rotate-1 backdrop-blur-sm shadow-sm" />
            )}

            {item.type === "image" && item.image && (
              <div className="bg-white p-4 pb-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow">
                <div className={`relative w-full ${item.aspect === 'aspect-square' ? 'aspect-square' : item.aspect === 'aspect-[3/4]' ? 'aspect-[3/4]' : item.aspect === 'aspect-[16/9]' ? 'aspect-[16/9]' : 'aspect-[4/5]'} overflow-hidden bg-gray-100`}>
                  <Image
                    src={typeof item.image === 'string' ? item.image : urlForImage(item.image).url()}
                    alt="Lookbook"
                    fill
                    className="object-cover filter contrast-110 sepia-[0.2] hover:sepia-0 transition-all duration-700"
                  />
                  {/* Film Dust Overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
                
                {/* Handwritten Caption */}
                {item.caption && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-widest text-center">
                      {item.caption}
                    </p>
                  </div>
                )}
              </div>
            )}

            {item.type === "text" && (
               <div className={`w-full bg-[#f8f5f2] p-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-retro-black flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group hover:scale-[1.02] transition-transform`}>
                  {/* Paper Texture */}
                  <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
                  
                  <div className="absolute top-4 left-4">
                    <Paperclip className="w-6 h-6 text-retro-black/40" />
                  </div>

                  <h2 className="text-5xl md:text-7xl font-oswald font-bold text-retro-black text-center uppercase leading-[0.85] tracking-tighter mix-blend-multiply z-10">
                     {item.textContent}
                  </h2>
                  
                  <div className="mt-6 border-t border-retro-black/20 pt-4 w-full text-center z-10">
                    <p className="font-mono text-xs text-retro-black/60 uppercase">
                      {item.caption || "Notes from the Archive"}
                    </p>
                  </div>
               </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            {displayItems.map((item) => {
              if (item._id !== selectedId) return null;
              return (
                <motion.div 
                  key={item._id}
                  layoutId={`card-${item._id}`}
                  className="bg-white p-6 pb-16 max-w-2xl w-full shadow-2xl relative rotate-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute -top-4 -right-4 w-10 h-10 bg-retro-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {item.type === "image" && item.image && (
                    <div className="relative w-full aspect-[3/4] bg-gray-100">
                      <Image
                        src={typeof item.image === 'string' ? item.image : urlForImage(item.image).url()}
                        alt="Lookbook Expanded"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {item.type === "text" && (
                     <div className="w-full aspect-square bg-[#f8f5f2] flex items-center justify-center p-12 border-2 border-retro-black">
                        <h2 className="text-6xl md:text-8xl font-oswald font-bold text-retro-black text-center uppercase leading-[0.85] tracking-tighter">
                           {item.textContent}
                        </h2>
                     </div>
                  )}

                  <div className="mt-8 text-center">
                    <h3 className="font-oswald text-2xl uppercase mb-2">{item.caption}</h3>
                    <p className="font-mono text-sm text-gray-500">
                      Archive Collection 2024 • Item #{item._id.split('-')[1]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
