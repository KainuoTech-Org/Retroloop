import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

interface LookbookItem {
  _id: string;
  type: "image" | "text";
  image?: any;
  textContent?: string;
  aspect: string;
}

// Mock Data for Demo (Fallback when Sanity is empty)
const MOCK_LOOKBOOK = [
  { _id: "mock-1", type: "image" as const, image: "/lookbook/look1.jpg?v=2", aspect: "aspect-[3/4]" },
  { _id: "mock-2", type: "image" as const, image: "/lookbook/look2.jpg?v=2", aspect: "aspect-[4/5]" },
  { _id: "mock-3", type: "text" as const, textContent: "Y2K VISION", aspect: "aspect-square" },
  { _id: "mock-4", type: "image" as const, image: "/lookbook/look4.jpg?v=2", aspect: "aspect-[3/4]" },
  { _id: "mock-5", type: "text" as const, textContent: "TIMELESS", aspect: "aspect-[16/9]" },
  { _id: "mock-6", type: "image" as const, image: "/lookbook/look6.jpg?v=2", aspect: "aspect-[3/4]" },
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
    <div className="min-h-screen pt-20 pb-10 px-2 sm:px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 text-center">
           <h1 className="text-4xl md:text-7xl font-oswald font-bold uppercase text-retro-black mb-2">
              Visual Archive
           </h1>
           <p className="font-mono text-sm tracking-widest text-retro-black/60 uppercase">
              Styling / Culture / Vibe
           </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
           {displayItems.map((item: LookbookItem) => (
             <div 
               key={item._id}
               className={`relative break-inside-avoid overflow-hidden group ${item.aspect}`}
             >
                {item.type === "image" && item.image && (
                  <div className={`relative w-full h-full ${item.aspect === 'aspect-square' ? 'aspect-square' : item.aspect === 'aspect-[3/4]' ? 'aspect-[3/4]' : item.aspect === 'aspect-[16/9]' ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                    <Image
                      src={typeof item.image === 'string' ? item.image : urlForImage(item.image).url()}
                      alt="Lookbook"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-retro-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                )}

                {item.type === "text" && (
                   <div className={`w-full h-full bg-retro-black flex items-center justify-center p-8 ${item.aspect === 'aspect-square' ? 'aspect-square' : item.aspect === 'aspect-[3/4]' ? 'aspect-[3/4]' : item.aspect === 'aspect-[16/9]' ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                      <h2 className="text-4xl md:text-6xl font-oswald font-bold text-retro-beige text-center uppercase leading-none tracking-tighter">
                         {item.textContent}
                      </h2>
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
