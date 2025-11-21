import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      
      {/*
        BACKGROUND IMAGE
        Beautiful New Zealand collage with vibrant landscapes
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="/nz-background.png"
          alt="New Zealand Scenery"
          className="w-full h-full object-cover object-center"
        />
        {/*
          Gradient Overlay:
          Adds depth and makes text legible over the colorful background
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Top Tag */}
        <div
          className="inline-block bg-white/30 backdrop-blur-lg text-white px-8 py-3 mb-8 rounded-full border-2 border-white/60 shadow-2xl"
          data-aos="fade-down"
        >
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
            Delhi ✈ Auckland
          </span>
        </div>

        {/* Title Group */}
        <div className="text-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.7)]">
           <h2
             className="font-hand text-4xl md:text-6xl mb-3 text-yellow-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
             data-aos="zoom-in"
             data-aos-delay="100"
           >
             Preksha's
           </h2>

           <h1
             className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider leading-tight mb-6 text-white"
             data-aos="zoom-in"
             data-aos-delay="300"
           >
             AUCKLAND<br/>
             <span className="text-4xl md:text-6xl font-light tracking-[0.4em] block mt-6 font-sans bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">ADVENTURE</span>
           </h1>

           <p
             className="font-sans text-base md:text-xl font-semibold text-white tracking-wide max-w-2xl mx-auto mt-8 leading-relaxed bg-black/20 backdrop-blur-sm px-6 py-4 rounded-xl"
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
          className="bg-gradient-to-r from-purple-500/80 to-blue-500/80 backdrop-blur-lg border-2 border-white/70 text-white px-8 py-4 rounded-full hover:from-white hover:to-white hover:text-purple-700 transition-all duration-300 flex items-center gap-3 shadow-2xl group"
        >
          <span className="text-sm font-bold tracking-widest uppercase">Begin Journey</span>
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
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