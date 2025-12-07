"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Instagram Feed Widget
 * 
 * This component is designed to embed an Elfsight or SnapWidget Instagram feed.
 * To use this:
 * 1. Go to https://elfsight.com/instagram-feed-instalink/ or https://snapwidget.com/
 * 2. Create a widget connected to your Instagram account
 * 3. Copy the <div> or <script> code provided
 * 4. Paste the ID or replace the code below
 */
export function InstagramFeed() {
  const { t } = useLanguage();

  // Load Elfsight script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-retro-beige border-t border-retro-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-oswald font-bold uppercase tracking-wide text-retro-black">
            {t.featured.instagramTitle}
          </h2>
          <p className="mt-4 font-mono text-sm tracking-widest uppercase text-retro-black/60">
            {t.featured.instagramSubtitle}
          </p>
          <div className="h-1 w-24 bg-retro-red mx-auto mt-6" />
        </div>

        {/* Widget Container */}
        <div className="w-full min-h-[400px] bg-white border border-retro-black/10 p-4 flex items-center justify-center overflow-hidden">
            {/* Elfsight Widget */}
            <div className="elfsight-app-aeccd9b1-bb4b-46a5-9587-9d72cab192db w-full" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
