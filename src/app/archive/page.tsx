"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/product/ProductCard";
import { motion } from "framer-motion";

// Real Images from Unsplash
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "1994 Pink Floyd Division Bell Tee",
    brand: "Brockum",
    price: 2800,
    size: "XL",
    grade: "B",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "2",
    name: "Vintage Carhartt Detroit Jacket",
    brand: "Carhartt",
    price: 1500,
    size: "L",
    grade: "A",
    image: "https://images.unsplash.com/photo-1551028919-ac7f2ca30662?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
  },
  {
    id: "3",
    name: "Nike 90s Center Swoosh Hoodie",
    brand: "Nike",
    price: 850,
    size: "M",
    grade: "B",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "4",
    name: "Levi's 501 Big E Selvedge",
    brand: "Levi's",
    price: 3200,
    size: "32/30",
    grade: "A",
    image: "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "5",
    name: "Stussy 80s Rasta Tee",
    brand: "Stussy",
    price: 1200,
    size: "L",
    grade: "C",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "6",
    name: "Prada Sport Nylon Vest",
    brand: "Prada",
    price: 4500,
    size: "48",
    grade: "S",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
  },
  {
    id: "7",
    name: "Harley Davidson 3D Emblem",
    brand: "Harley Davidson",
    price: 1800,
    size: "XL",
    grade: "A",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "8",
    name: "Issey Miyake Pleats Pants",
    brand: "Issey Miyake",
    price: 2200,
    size: "2",
    grade: "A",
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
];

const CATEGORIES = ["All", "Tops", "Outerwear", "Bottoms", "Accessories"];

export default function ArchivePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red mb-4">
          The Archive
        </h1>
        <p className="max-w-2xl mx-auto text-retro-black/70 font-mono text-sm md:text-base">
          A curated selection of timeless pieces. Each item is unique and thoroughly graded.
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
            No items found in this category.
         </div>
      )}
    </div>
  );
}
