"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Grid, PlaySquare, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MOCK_IG_POSTS = [
  { id: 1, image: "/lookbook/ig_store.jpg", likes: "1.2k" },
  { id: 2, image: "/lookbook/ig_stack.jpg", likes: "892" },
  { id: 3, image: "/lookbook/ig_detail.jpg", likes: "2.1k" },
  { id: 4, image: "/lookbook/ig_rack.jpg", likes: "1.5k" },
  { id: 5, image: "/lookbook/ig_denim.jpg", likes: "3.4k" },
  { id: 6, image: "/lookbook/ig_rack_2.jpg", likes: "982" },
  { id: 7, image: "/lookbook/ig_tee.jpg", likes: "1.8k" },
  { id: 8, image: "/lookbook/ig_leather.jpg", likes: "2.5k" },
  { id: 9, image: "/lookbook/ig_shoes.jpg", likes: "4.2k" },
];

export function InstagramFeed() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-retro-beige border-t border-retro-black/10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Instagram Profile Header */}
        <div className="bg-white border border-retro-black/10 p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile Picture */}
            <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-retro-red/20 flex-shrink-0 bg-retro-black/5 flex items-center justify-center">
               <span className="font-oswald font-bold text-3xl text-retro-black">RL</span>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h2 className="font-oswald text-2xl font-bold text-retro-black">retroloop_archive</h2>
                <div className="flex gap-2">
                  <Link 
                    href="https://instagram.com/retroloop_archive" 
                    target="_blank"
                    className="px-6 py-1.5 bg-retro-black text-white text-sm font-bold rounded hover:bg-retro-red transition-colors"
                  >
                    Follow
                  </Link>
                  <button className="px-4 py-1.5 bg-retro-gray/10 text-retro-black text-sm font-bold rounded hover:bg-retro-gray/20 transition-colors">
                    Message
                  </button>
                </div>
              </div>

              <div className="flex justify-center md:justify-start gap-8 mb-4 text-sm font-mono">
                <div className="text-center md:text-left"><span className="font-bold">1,208</span> posts</div>
                <div className="text-center md:text-left"><span className="font-bold">45.2k</span> followers</div>
                <div className="text-center md:text-left"><span className="font-bold">280</span> following</div>
              </div>

              <div className="hidden md:block">
                <h3 className="font-bold text-sm">RetroLoop Archive HK</h3>
                <p className="text-sm text-gray-600">Vintage Clothing Store<br/>Timeless Pieces for Modern Souls.<br/>HK Based Archive / Worldwide Shipping ✈️</p>
              </div>
            </div>
          </div>

          {/* Mobile Bio */}
          <div className="mt-6 md:hidden text-center">
            <h3 className="font-bold text-sm">RetroLoop Archive HK</h3>
            <p className="text-sm text-gray-600">Vintage Clothing Store<br/>Timeless Pieces for Modern Souls.<br/>HK Based Archive / Worldwide Shipping ✈️</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center border-t border-retro-black/10 mb-1">
          <div className="flex gap-12">
            <button className="flex items-center gap-2 py-4 border-t-2 border-retro-black text-retro-black text-xs font-bold uppercase tracking-widest">
              <Grid className="w-3 h-3" /> POSTS
            </button>
            <button className="flex items-center gap-2 py-4 border-t-2 border-transparent text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-gray-600">
              <PlaySquare className="w-3 h-3" /> REELS
            </button>
            <button className="flex items-center gap-2 py-4 border-t-2 border-transparent text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-gray-600">
              <User className="w-3 h-3" /> TAGGED
            </button>
          </div>
        </div>

        {/* Grid Feed */}
        <div className="grid grid-cols-3 gap-1 md:gap-4">
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
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white font-bold font-oswald text-lg">
                  <Heart className="w-5 h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
