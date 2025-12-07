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
    script.src = "https://static.elfsight.com/platform/platform.js";
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
        <div className="w-full min-h-[400px] bg-white border border-retro-black/10 p-4 flex items-center justify-center">
            {/* 
                PLACEHOLDER FOR ELFSIGHT WIDGET 
                Replace the div below with your actual Elfsight widget code.
                Example: <div className="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" data-elfsight-app-lazy></div>
            */}
            
            {/* Demo/Instruction State */}
            <div className="text-center p-8 border-2 border-dashed border-retro-black/20 rounded-lg w-full h-full flex flex-col items-center justify-center gap-4 bg-retro-gray/5">
                <p className="font-oswald text-xl text-retro-black/40 uppercase">Instagram Feed Widget Area</p>
                <p className="font-mono text-sm text-retro-black/60 max-w-md">
                    To activate automatic updates:
                    <br/>
                    1. Create a free widget at <b>elfsight.com</b>
                    <br/>
                    2. Copy your Widget ID
                    <br/>
                    3. Paste it into <code>src/components/ui/InstagramFeed.tsx</code>
                </p>
                <a 
                    href="https://elfsight.com/instagram-feed-instalink/create/" 
                    target="_blank"
                    className="mt-4 px-6 py-2 bg-retro-black text-retro-beige font-oswald uppercase text-sm hover:bg-retro-red transition-colors"
                >
                    Get Widget Code
                </a>
            </div>
            
            {/* Uncomment this line and replace ID when you have it */}
            {/* <div className="elfsight-app-REPLACE_WITH_YOUR_WIDGET_ID" data-elfsight-app-lazy></div> */}
        </div>
      </div>
    </section>
  );
}
