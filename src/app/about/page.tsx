export default function AboutPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4">
         <div className="max-w-3xl text-center space-y-8">
           <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red">
             About The Archive
           </h1>
           <p className="text-xl md:text-2xl font-mono leading-relaxed">
             RetroLoop Archive is not just a shop. It is a curated collection of fashion history, preserving the rebellious spirit of the past for the modern soul.
           </p>
           <p className="text-base md:text-lg opacity-80 leading-relaxed">
             Founded in Hong Kong, we specialize in sourcing rare, high-quality vintage garments from the 80s, 90s, and Y2K eras. Every piece tells a story. Every tear has a memory.
           </p>
           
           <div className="pt-8">
              <span className="block font-oswald text-xl uppercase tracking-widest mb-2">Established</span>
              <span className="text-4xl font-bold">2023</span>
           </div>
         </div>
      </div>
    );
  }
