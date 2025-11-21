import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      
      {/* 
        BACKGROUND IMAGE
        Standard high-quality Auckland/NZ landscape
      */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507699622177-48857e0e5528?q=80&w=3000&auto=format&fit=crop" 
          alt="Auckland Scenery" 
          className="w-full h-full object-cover object-center animate-[pulse_60s_ease-in-out_infinite]"
          style={{ animationDuration: '60s', transformOrigin: 'center' }}
        />
        {/* 
          Gradient Overlay:
          Adds a sophisticated dark fade to make text legible
        */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Top Tag */}
        <div 
          className="inline-block bg-white/20 backdrop-blur-md text-white px-6 py-2 mb-6 rounded-full border border-white/30 shadow-lg"
          data-aos="fade-down"
        >
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-shadow-sm">
            Delhi ✈ Auckland
          </span>
        </div>

        {/* Title Group */}
        <div className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
           <h2 
             className="font-serif italic text-3xl md:text-5xl mb-2 text-blush mix-blend-hard-light"
             data-aos="zoom-in" 
             data-aos-delay="100"
           >
             Preksha's
           </h2>
           
           <h1 
             className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-tight mb-4"
             data-aos="zoom-in" 
             data-aos-delay="300"
           >
             AUCKLAND<br/>
             <span className="text-3xl md:text-5xl font-light tracking-[0.3em] block mt-4 font-sans">ADVENTURE</span>
           </h1>

           <p 
             className="font-sans text-sm md:text-lg font-medium text-gray-100 tracking-wider max-w-xl mx-auto mt-6 leading-relaxed"
             data-aos="fade-up" 
             data-aos-delay="500"
           >
             A journey of independence, discovery, and enduring love.
           </p>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20" data-aos="fade-up" data-aos-delay="800">
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-6 py-3 rounded-full hover:bg-white hover:text-softBlack transition-all duration-300 flex items-center gap-2 shadow-lg group"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Begin Journey</span>
          <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
        </button>
      </div>

      {/* Ripped Paper Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1">
        <svg className="fill-cream w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FBFBF5" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>
    </div>
  );
};