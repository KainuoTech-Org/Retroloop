"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const NAV_LINKS = [
    { href: "/archive", label: t.nav.archive },
    { href: "/lookbook", label: t.nav.lookbook },
    { href: "/about", label: t.nav.about },
    { href: "/visit", label: t.nav.visit },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-retro-black bg-retro-beige/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-oswald text-2xl font-bold tracking-tighter hover:text-retro-red transition-colors">
          RETROLOOP<span className="text-retro-red">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-oswald text-lg font-medium tracking-wide hover:text-retro-red hover:underline decoration-2 underline-offset-4 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
            className="hidden md:flex items-center gap-1 font-oswald font-bold hover:text-retro-red transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{language === "en" ? "CN" : "EN"}</span>
          </button>

          <Link href="/visit" className="hidden md:flex items-center gap-2 bg-retro-black text-retro-beige px-4 py-2 font-oswald text-sm uppercase hover:bg-retro-red transition-colors">
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookVisit}</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:text-retro-red transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-retro-black bg-retro-beige"
          >
            <div className="flex flex-col space-y-4 p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-oswald text-3xl font-bold hover:text-retro-red hover:pl-2 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex gap-4 mt-4">
                 <button 
                    onClick={() => {
                        setLanguage(language === "en" ? "zh" : "en");
                        setIsOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 border border-retro-black px-4 py-3 font-oswald text-xl uppercase hover:bg-retro-black hover:text-retro-beige transition-colors w-1/2"
                >
                    <Globe className="w-5 h-5" />
                    <span>{language === "en" ? "中文" : "English"}</span>
                </button>
                <Link
                    href="/visit"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-retro-black text-retro-beige px-4 py-3 font-oswald text-xl uppercase hover:bg-retro-red transition-colors w-1/2"
                >
                    <Calendar className="w-5 h-5" />
                    <span>{t.nav.bookVisit}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
