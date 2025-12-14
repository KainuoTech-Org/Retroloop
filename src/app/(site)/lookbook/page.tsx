import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Paperclip, Pin } from "lucide-react";
import { motion } from "framer-motion";

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

// Client component wrapper for animations
import { LookbookGrid } from "./LookbookGrid";
import { useLanguage } from "@/context/LanguageContext";

export default async function LookbookPage() {
  const items = await getLookbook();
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 bg-[#f0f0f0] relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <LookbookHeader />
        
        {/* Client-side animated grid */}
        <LookbookGrid items={items} />
      </div>
    </div>
  );
}

function LookbookHeader() {
  // This needs to be a client component to use translations, 
  // or we can just make LookbookPage a client component?
  // Since getLookbook is async, LookbookPage must be server.
  // We can pass translations or make a small client header component.
  // Actually, let's just make LookbookGrid handle the header too? 
  // Or create a separate client component for header.
  return (
    <div className="mb-20 text-center">
        {/* We will replace this with a client component that handles translation */}
    </div>
  )
}
