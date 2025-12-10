"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/product/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

interface FilterBarProps {
  products: Product[];
}

const CATEGORIES = ["All", "Tops", "Outerwear", "Bottoms", "Accessories"];

export function FilterBar({ products }: FilterBarProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Filter Buttons */}
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

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
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
    </>
  );
}
