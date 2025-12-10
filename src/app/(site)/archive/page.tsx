"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/product/ProductCard";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Real Images from Unsplash
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "1994 Pink Floyd Division Bell Tee",
    brand: "Brockum",
    price: 2800,
    size: "XL",
    grade: "B",
    image: "/lookbook/look1.jpg",
    category: "Tops",
  },
  {
    id: "2",
    name: "Vintage Carhartt Detroit Jacket",
    brand: "Carhartt",
    price: 1500,
    size: "L",
    grade: "A",
    image: "/lookbook/look4.jpg",
    category: "Outerwear",
  },
  {
    id: "3",
    name: "Nike 90s Center Swoosh Hoodie",
    brand: "Nike",
    price: 850,
    size: "M",
    grade: "B",
    image: "/lookbook/look2.jpg",
    category: "Tops",
  },
  {
    id: "4",
    name: "Levi's 501 Big E Selvedge",
    brand: "Levi's",
    price: 3200,
    size: "32/30",
    grade: "A",
    image: "/lookbook/look4.jpg",
    category: "Bottoms",
  },
  {
    id: "5",
    name: "Stussy 80s Rasta Tee",
    brand: "Stussy",
    price: 1200,
    size: "L",
    grade: "C",
    image: "/lookbook/look6.jpg",
    category: "Tops",
  },
  {
    id: "6",
    name: "Prada Sport Nylon Vest",
    brand: "Prada",
    price: 4500,
    size: "48",
    grade: "S",
    image: "/lookbook/look2.jpg",
    category: "Outerwear",
  },
  {
    id: "7",
    name: "Harley Davidson 3D Emblem",
    brand: "Harley Davidson",
    price: 1800,
    size: "XL",
    grade: "A",
    image: "/lookbook/look1.jpg",
    category: "Tops",
  },
  {
    id: "8",
    name: "Issey Miyake Pleats Pants",
    brand: "Issey Miyake",
    price: 2200,
    size: "2",
    grade: "A",
    image: "/lookbook/look2.jpg",
    category: "Bottoms",
  },
];

const CATEGORIES = ["All", "Tops", "Outerwear", "Bottoms", "Accessories"];

export default function ArchivePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const filteredProducts = activeCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red mb-4">
          {t.archive.title}
        </h1>
        <p className="max-w-2xl mx-auto text-retro-black/70 font-mono text-sm md:text-base">
          {t.archive.subtitle}
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-6 py-2 border border-retro-black font-oswald uppercase tracking-wide transition-all
              ${activeCategory === cat 
                ? "bg-retro-black text-retro-beige shadow-[4px_4px_0px_0px_rgba(139,0,0,1)]" 
                : "hover:bg-retro-red hover:text-white hover:border-retro-red"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
         <div className="text-center py-20 opacity-50 font-mono">
            {t.archive.noItems}
         </div>
      )}

      {/* More Products Disclaimer */}
      <div className="mt-20 text-center border-t border-retro-black/10 pt-16">
        <h3 className="font-oswald text-2xl font-bold uppercase text-retro-black mb-4">
          {t.archive.moreTitle}
        </h3>
        <p className="max-w-xl mx-auto text-retro-black/60 font-mono text-sm leading-relaxed">
          {t.archive.moreSubtitle}
        </p>
      </div>
    </div>
  );
}
