import React from 'react';
import { Heart } from 'lucide-react';

export const IntroLetter: React.FC = () => {
  return (
    <div className="relative w-full py-24 bg-cream flex justify-center">
      <div 
        className="max-w-3xl mx-4 md:mx-auto bg-white p-8 md:p-12 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border-t-4 border-blush relative"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        {/* Decorative quote icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blush text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-6 h-6 fill-current" />
        </div>

        <h2 className="text-center font-serif text-2xl text-sage font-bold mb-8 mt-2">To Preksha...</h2>
        
        <div className="font-serif text-lg text-gray-600 leading-loose text-center italic">
          <p>
            "Watching you embark on this journey to Auckland was one of the proudest moments of my life. 
            Even though 7,700 miles separated us, I felt closer to you with every story you shared, 
            every picture you sent, and every late-night call we had. This isn't just a timeline of your trip; 
            it's a collection of memories that shows just how brave, beautiful, and incredible you are. 
            Here is a small reminder of the amazing adventure you lived."
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-gray-400">
            With all my love, Vinayak
          </p>
        </div>
      </div>
    </div>
  );
};