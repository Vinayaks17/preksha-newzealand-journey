import React from 'react';
import { VinayakNoteData } from '../types';
import { VinayakNote } from './VinayakNote';
import { Calendar } from 'lucide-react';
import { ImageGallery } from './ImageGallery';

interface TimelineCardProps {
  title: string;
  description: string;
  imageUrls: string[];
  date?: string;
  vinayakNote?: VinayakNoteData;
  index: number;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  description,
  imageUrls,
  date,
  vinayakNote,
  index
}) => {
  
  return (
    <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 mb-20 group">
      
      {/* 
        DATE COLUMN (Desktop) 
        Sticks to the left of the timeline line
      */}
      <div className="hidden md:flex flex-col items-end w-32 md:w-48 flex-shrink-0 pt-8 pr-8 text-right">
        {date && (
          <div className="sticky top-32 transition-all duration-500" data-aos="fade-right">
             <span className="block font-serif text-4xl text-sage font-bold opacity-80">{date.split(' ')[0]}</span>
             {/* Only render the second line if there are more words, removed '|| Day' fallback */}
             <span className="block font-sans text-sm text-gray-400 uppercase tracking-widest">{date.split(' ').slice(1).join(' ')}</span>
          </div>
        )}
      </div>

      {/* 
        TIMELINE DOT & LINE MARKER 
        Positioned absolutely on the main line
      */}
      <div className="absolute left-4 md:left-[12rem] top-10 w-4 h-4 bg-sage rounded-full border-4 border-cream z-10 shadow-md transform -translate-x-1/2 md:translate-x-[1px]"></div>

      {/* 
        MAIN CONTENT CARD 
      */}
      <div 
        className="flex-1 pl-12 md:pl-0" 
        data-aos="fade-up" 
        data-aos-duration="800"
        data-aos-delay={index * 50}
      >
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-stone-100 relative overflow-visible hover:shadow-xl transition-shadow duration-500">
          
          {/* Mobile Date */}
          {date && (
            <div className="md:hidden mb-3 flex items-center gap-2 text-sage font-bold text-sm uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              {date}
            </div>
          )}

          {/* Images */}
          <div className="mb-6">
             <ImageGallery images={imageUrls} altText={title} />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl text-softBlack font-bold mb-3">{title}</h3>
              <p className="font-sans text-gray-600 text-sm leading-loose">
                {description}
              </p>
            </div>

            {/* Sticky Note - Attached to the side or bottom */}
            {vinayakNote && (
              <div className="w-full md:w-64 flex-shrink-0">
                <VinayakNote text={vinayakNote.text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};