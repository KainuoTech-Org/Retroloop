"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function VisitPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red mb-4">
          {t.visit.title}
        </h1>
        <p className="text-retro-black/60 font-mono text-sm tracking-widest uppercase">
          {t.visit.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Info Column */}
        <div className="space-y-12">
           {/* Location */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-4"
           >
             <div className="flex items-center gap-3 text-retro-red">
               <MapPin className="w-6 h-6" />
               <h3 className="font-oswald text-2xl font-bold uppercase">{t.visit.location}</h3>
             </div>
             <p className="font-mono text-lg leading-relaxed">
              {t.visit.address.line1}<br/>
              {t.visit.address.line2}<br/>
              {t.visit.address.line3}
            </p>
            <p className="text-sm opacity-60">{t.visit.address.mtr}</p>
          </motion.div>

          {/* Hours */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-retro-red">
              <Clock className="w-6 h-6" />
              <h3 className="font-oswald text-2xl font-bold uppercase">{t.visit.hours}</h3>
            </div>
            <ul className="font-mono text-lg space-y-2">
              <li className="flex justify-between max-w-xs border-b border-retro-black/10 pb-1">
                <span>{t.visit.days.monFri}</span>
                <span>13:00 - 20:00</span>
              </li>
              <li className="flex justify-between max-w-xs border-b border-retro-black/10 pb-1">
                <span>{t.visit.days.satSun}</span>
                <span>12:00 - 21:00</span>
              </li>
            </ul>
          </motion.div>

           {/* Contact & Booking */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-6"
           >
             <div className="flex items-center gap-3 text-retro-red">
               <Mail className="w-6 h-6" />
               <h3 className="font-oswald text-2xl font-bold uppercase">{t.visit.contact}</h3>
             </div>
             
             <div className="flex flex-col gap-4">
               <Link 
                  href="https://wa.me/85212345678"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-6 font-oswald font-bold uppercase hover:bg-green-500 transition-colors w-full sm:w-auto"
               >
                  <MessageCircle className="w-5 h-5" />
                  {t.visit.whatsapp}
               </Link>
               
               <Link 
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-retro-black text-retro-beige py-4 px-6 font-oswald font-bold uppercase hover:bg-retro-red transition-colors w-full sm:w-auto"
               >
                  <Instagram className="w-5 h-5" />
                  {t.visit.instagram}
               </Link>
             </div>
             
             <p className="text-sm text-retro-black/60 italic mt-4">
               {t.visit.tips}
             </p>
           </motion.div>
        </div>

        {/* Map Column */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square w-full bg-retro-gray/10"
        >
           {/* Embed Google Map */}
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6835974610196!2d114.1528633116805!3d22.289993979612347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007b77136069%3A0x633161c210519392!2sWellington%20St%2C%20Central!5e0!3m2!1sen!2shk!4v1716035000000!5m2!1sen!2shk" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="absolute inset-0"
           />
        </motion.div>
      </div>
    </div>
  );
}
