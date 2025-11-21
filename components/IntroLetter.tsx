import React from 'react';
import { Heart } from 'lucide-react';

export const IntroLetter: React.FC = () => {
  return (
    <div className="relative w-full py-28 bg-gradient-to-b from-transparent via-cream to-transparent flex justify-center">
      <div
        className="max-w-4xl mx-4 md:mx-auto bg-white/90 backdrop-blur-sm p-10 md:p-16 rounded-2xl shadow-[0_20px_60px_-15px_rgba(155,133,196,0.3)] border-t-8 border-lavender relative"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        {/* Decorative quote icon */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-lavender to-blush text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl">
          <Heart className="w-8 h-8 fill-current" />
        </div>

        <h2 className="text-center font-hand text-4xl md:text-5xl text-lavender font-bold mb-10 mt-4">To Preksha...</h2>

        <div className="font-serif text-xl md:text-2xl text-softBlack leading-relaxed text-center italic">
          <p>
            "Watching you embark on this journey to Auckland was one of the proudest moments of my life.
            Even though 7,700 miles separated us, I felt closer to you with every story you shared,
            every picture you sent, and every late-night call we had. This isn't just a timeline of your trip;
            it's a collection of memories that shows just how brave, beautiful, and incredible you are.
            Here is a small reminder of the amazing adventure you lived."
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="font-hand text-lg font-bold text-mountainGray">
            With all my love, Vinayak
          </p>
        </div>
      </div>
    </div>
  );
};