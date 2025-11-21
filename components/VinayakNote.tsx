import React from 'react';
import { Heart } from 'lucide-react';

interface VinayakNoteProps {
  text: string;
}

export const VinayakNote: React.FC<VinayakNoteProps> = ({ text }) => {
  return (
    <div 
      className="relative mt-6 md:mt-0 md:-ml-4 md:-mr-4 transform rotate-1 hover:rotate-0 transition-transform duration-300"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      {/* Tape effect */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/30 backdrop-blur-sm border border-white/40 shadow-sm rotate-[-2deg] z-10"></div>

      <div className="bg-blush p-5 rounded-sm shadow-lg border border-rose-200 relative">
        <div className="flex items-center gap-2 mb-2 border-b border-rose-300/30 pb-2">
          <Heart className="w-4 h-4 text-rose-600 fill-current" />
          <span className="text-xs font-bold uppercase tracking-widest text-rose-900 font-sans">
            Note from V
          </span>
        </div>
        <p className="text-lg md:text-xl text-rose-900 font-hand font-semibold leading-snug">
          "{text}"
        </p>
      </div>
    </div>
  );
};