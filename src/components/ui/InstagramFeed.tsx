"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MOCK_IG_POSTS = [
  { id: 1, image: "/lookbook/look1.jpg?v=2", likes: "1.2k" },
  { id: 2, image: "/lookbook/look2.jpg?v=2", likes: "892" },
  { id: 3, image: "/lookbook/look3.jpg?v=2", likes: "2.1k" },
  { id: 4, image: "/lookbook/look4.jpg?v=2", likes: "1.5k" },
];

export function InstagramFeed() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-retro-beige border-t border-retro-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase tracking-wide text-retro-black">
            {t.featured.instagramTitle}
          </h2>
          <Link 
            href="https://instagram.com/retroloop_archive" 
            target="_blank"
            className="inline-block mt-4 font-mono text-sm tracking-widest uppercase text-retro-black/60 hover:text-retro-red transition-colors"
          >
            {t.featured.instagramSubtitle}
          </Link>
          <div className="h-1 w-24 bg-retro-red mx-auto mt-6" />
        </div>

        {/* Mock Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_IG_POSTS.map((post) => (
            <Link 
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              className="group relative aspect-square overflow-hidden bg-retro-gray/10 block"
            >
              <Image
                src={post.image}
                alt={`Instagram Post ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white font-bold font-oswald text-lg">
                  <Heart className="w-6 h-6 fill-white" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Follow Button */}
        <div className="mt-12 text-center">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-retro-black text-retro-beige font-oswald font-bold uppercase tracking-wide hover:bg-retro-red transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
