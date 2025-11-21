import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center my-20 text-center" data-aos="fade-up">
      <div className="bg-gradient-to-r from-lavender/20 to-sage/20 px-10 py-5 rounded-2xl border-2 border-lavender/30 backdrop-blur-md shadow-lg">
        <h2 className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-lavender to-sage bg-clip-text text-transparent font-bold tracking-wide">
          {title}
        </h2>
      </div>
      <p className="mt-6 font-sans text-mountainGray max-w-lg mx-auto text-base md:text-lg italic leading-relaxed">
        {description}
      </p>
    </div>
  );
};