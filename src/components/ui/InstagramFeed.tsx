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
            {/* 
                INSTRUCTION FOR SHOP OWNER:
                To display YOUR own Instagram feed:
                1. Go to https://elfsight.com/instagram-feed-instalink/
                2. Create a free account and connect your Instagram
                3. Copy the "Widget ID" (it looks like: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
                4. Replace the ID below with yours
            */}
            
            {/* Demo/Instruction State - Shown when no real widget is connected or for demo purposes */}
            <div className="text-center p-8 border-2 border-dashed border-retro-black/20 rounded-lg w-full h-full flex flex-col items-center justify-center gap-6 bg-retro-gray/5 min-h-[400px]">
                <div className="space-y-2">
                    <p className="font-oswald text-2xl text-retro-black/40 uppercase">Connect Your Instagram</p>
                    <p className="font-mono text-sm text-retro-red">Currently showing demo feed</p>
                </div>
                
                <div className="text-left bg-white p-6 rounded shadow-sm max-w-md mx-auto border border-retro-black/10">
                    <p className="font-bold mb-2 font-oswald uppercase">How to display YOUR shop's feed:</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm font-mono text-retro-black/70">
                        <li>Visit <a href="https://elfsight.com/instagram-feed-instalink/" target="_blank" className="underline text-blue-600">elfsight.com</a> (Free)</li>
                        <li>Create a widget & connect your account</li>
                        <li>Get your <b>Widget ID</b></li>
                        <li>Send the ID to your developer to update</li>
                    </ol>
                </div>

                {/* 
                   To use the real feed, uncomment the line below and replace the ID 
                   <div className="elfsight-app-YOUR-WIDGET-ID-HERE" data-elfsight-app-lazy></div>
                */}
            </div>
        </div>
      </div>
    </section>
  );
}
