import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Paperclip, Pin } from "lucide-react";

interface LookbookItem {
  _id: string;
  type: "image" | "text";
  image?: any;
  textContent?: string;
  aspect: string;
  rotation?: string;
  caption?: string;
}

// Mock Data for Demo (Fallback when Sanity is empty)
const MOCK_LOOKBOOK: LookbookItem[] = [
  { 
    _id: "mock-1", 
    type: "image", 
    image: "/lookbook/look1.jpg?v=2", 
    aspect: "aspect-[3/4]",
    rotation: "rotate-2",
    caption: "Summer '94 Vibes"
  },
  { 
    _id: "mock-2", 
    type: "image", 
    image: "/lookbook/look2.jpg?v=2", 
    aspect: "aspect-[4/5]",
    rotation: "-rotate-1",
    caption: "Nike Center Swoosh"
  },
  { 
    _id: "mock-3", 
    type: "text", 
    textContent: "NOSTALGIA", 
    aspect: "aspect-square",
    rotation: "rotate-3",
    caption: "Manifesto"
  },
  { 
    _id: "mock-4", 
    type: "image", 
    image: "/lookbook/look4.jpg?v=2", 
    aspect: "aspect-[3/4]",
    rotation: "-rotate-2",
    caption: "Carhartt Workwear"
  },
  { 
    _id: "mock-5", 
    type: "text", 
    textContent: "RAW DENIM", 
    aspect: "aspect-[16/9]",
    rotation: "rotate-1",
    caption: "Fabric Details"
  },
  { 
    _id: "mock-6", 
    type: "image", 
    image: "/lookbook/look6.jpg?v=2", 
    aspect: "aspect-[3/4]",
    rotation: "rotate-2",
    caption: "501XX Selvedge"
  },
  { 
    _id: "mock-7", 
    type: "image", 
    image: "/lookbook/ig_leather.jpg", 
    aspect: "aspect-square",
    rotation: "-rotate-3",
    caption: "Leather Patina"
  },
];

async function getLookbook() {
  const query = `*[_type == "lookbook"] | order(_createdAt desc) {
    _id,
    type,
    image,
    textContent,
    aspect
  }`;
  return client.fetch(query);
}

export default async function LookbookPage() {
  const items = await getLookbook();
  
  // Combine Sanity data with Mock data if Sanity is empty
  const displayItems = items.length > 0 ? items : MOCK_LOOKBOOK;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 bg-[#f0f0f0] relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-20 text-center">
           <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase text-retro-black mb-4 tracking-tighter">
              Visual Archive
           </h1>
           <div className="inline-block bg-retro-red text-retro-beige px-4 py-1 transform -rotate-2">
             <p className="font-mono text-sm tracking-widest uppercase">
                Vol. 01 — 2024 Collection
             </p>
           </div>
        </div>

        {/* Masonry Grid with "Polaroid" Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-12 px-4 md:px-12">
           {displayItems.map((item: LookbookItem, idx: number) => (
             <div 
               key={item._id}
               className={`relative break-inside-avoid ${item.rotation || 'rotate-0'} transition-transform duration-500 hover:scale-105 hover:z-20`}
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
                  <div className="bg-white p-4 pb-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transform transition-all duration-300 hover:shadow-xl">
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
                   <div className={`w-full bg-[#f8f5f2] p-8 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-retro-black flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group`}>
                      {/* Paper Texture */}
                      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>
                      
                      <div className="absolute top-4 left-4">
                        <Paperclip className="w-6 h-6 text-retro-black/40" />
                      </div>

                      <h2 className="text-5xl md:text-7xl font-oswald font-bold text-retro-black text-center uppercase leading-[0.85] tracking-tighter mix-blend-multiply z-10 group-hover:scale-110 transition-transform duration-500">
                         {item.textContent}
                      </h2>
                      
                      <div className="mt-6 border-t border-retro-black/20 pt-4 w-full text-center z-10">
                        <p className="font-mono text-xs text-retro-black/60 uppercase">
                          {item.caption || "Notes from the Archive"}
                        </p>
                      </div>
                   </div>
                )}
             </div>
           ))}
        </div>

        {displayItems.length === 0 && (
           <div className="text-center py-20 opacity-50 font-mono">
              暂无内容 (No content yet)
           </div>
        )}
      </div>
    </div>
  );
}
