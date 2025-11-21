import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center my-16 text-center" data-aos="fade-up">
      <div className="bg-sage/10 px-8 py-4 rounded-full border border-sage/20 backdrop-blur-sm">
        <h2 className="font-serif text-3xl md:text-4xl text-sage font-bold tracking-wide">
          {title}
        </h2>
      </div>
      <p className="mt-4 font-sans text-gray-500 max-w-md mx-auto text-sm md:text-base italic">
        {description}
      </p>
    </div>
  );
};