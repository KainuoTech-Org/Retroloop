"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ConditionBadge, type ConditionGrade } from "./ConditionBadge";
import { MessageCircle } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  grade: ConditionGrade;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Construct WhatsApp message
  const inquiryMessage = encodeURIComponent(
    `Hi RetroLoop, I'm interested in the ${product.brand} ${product.name} (ID: ${product.id}). Is it still available?`
  );
  const whatsappUrl = `https://wa.me/85212345678?text=${inquiryMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-3"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-retro-gray/5 w-full">
        <div className="absolute top-2 left-2 z-10">
          <ConditionBadge grade={product.grade} />
        </div>
        
        <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500 ease-out">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>

        {/* Overlay Action - WhatsApp Inquiry */}
        <Link 
          href={whatsappUrl}
          target="_blank"
          className="absolute inset-0 bg-retro-black/40 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
             <button className="flex items-center gap-2 bg-green-600 text-white font-oswald font-bold py-3 px-6 uppercase hover:bg-green-500 transition-colors rounded-full">
                <MessageCircle className="w-5 h-5" />
                Inquire Now
             </button>
        </Link>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-oswald text-lg font-medium uppercase leading-tight group-hover:text-retro-red transition-colors">
            {product.name}
          </h3>
          <span className="font-mono text-sm">HKD ${product.price}</span>
        </div>
        <div className="flex justify-between items-center text-xs text-retro-black/60 uppercase tracking-wider">
          <span>{product.brand}</span>
          <span>Size: {product.size}</span>
        </div>
      </div>
    </motion.div>
  );
}
